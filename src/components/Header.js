import styled from "styled-components"
import config from "../../config.json";
const StyledHeader = styled.div`

    background-color: ${({theme}) => theme.backgroundLevel1};

    img {
        width: 80px;
        height : 80px;
        border-radius: 50%;
        margin: 10px;
    }

    .user-info {
        display : flex;
        align-items : center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px
    }
`;
const StyledBanner = styled.div`

    background-image: url(${({bg})=> bg});
   // background-image: url(${config.banner});
   height: 300px;
`;

export default function Header(props) {

    return (
        <StyledHeader>

            <StyledBanner bg={config.bg}/>
            <section className="user-info">

                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>

            </section>
        </StyledHeader>
    )
}