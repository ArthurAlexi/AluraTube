import config from "../config.json";
import Favoritos from "../src/components/Favoritos";
import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/TimeLine";
import React from "react";
import { videoService } from "../src/Services/videoService";



function HomePage() {

    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    const [playlists, setPlaylist] = React.useState({})
    const service = videoService()

    React.useEffect(() => {
        service.getAllVideos()
            .then((dados) => {
                // console.log(dados.data)
                const novasPlaylists = { ...playlists }
                dados.data.forEach((video) => {
                    if (!novasPlaylists[video.playlist]) {
                        novasPlaylists[video.playlist] = []
                    }
                    novasPlaylists[video.playlist]?.push(video)
                })
                setPlaylist(novasPlaylists)
            })
    }, [playlists])
    //Aqui as variáveis que caso mude, rechama a função do primeiro parâmetro


    //Prop Drilling
    return (
        <>

            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>

                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}></Menu>
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={playlists}></Timeline>
                {/*<Favoritos></Favoritos>*/}
            </div>
        </>
    )
}

export default HomePage




function Timeline({ searchValue, ...propriedades }) {
    // console.log("Dentro do componente", propriedades.playlists);
    const playlistNames = Object.keys(propriedades.playlists);
    // Statement
    // Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                // console.log(playlistName);
                // console.log(videos);
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase()
                                const searchValueNormalized = searchValue.toLowerCase()
                                return titleNormalized.includes(searchValueNormalized)
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
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