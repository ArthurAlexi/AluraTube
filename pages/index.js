import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Favoritos from "../src/components/Favoritos";
import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/TimeLine";

function HomePage() {

    return (
        <>
            <CSSReset />
            <div>
                <Menu></Menu>
                <Header/>
                <Timeline playlists={config.playlists}></Timeline>
                <Favoritos></Favoritos>
            </div>
        </>
    )
}

export default HomePage




function Timeline(propriedades) {
    // console.log("Dentro do componente", propriedades.playlists);
    const playlistNames = Object.keys(propriedades.playlists);
    // Statement
    // Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                        
                    </section>
                    
                )
            })}
        </StyledTimeline>
    )
}