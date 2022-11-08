import styled from "styled-components"
import config from "../../config.json";
const StyledHeader = styled.div`
    img {
        width: 80px;
        height : 80px;
        border-radius: 50%;
        margin: 10px;
    }

    .user-info {
        display : flex;
        align-items : center;
        background-color: white;
        margin-top: 10px;
        
    }
    .banner{
        background: url(https://img.freepik.com/free-vector/techno-banner-design_1048-10778.jpg?w=996&t=st=1667905819~exp=1667906419~hmac=8727a69173c008f647aa2586bb273d0c8e2965936eeda2c3d6a873fa279e42dc);
        width: 100%;
        Height: 230px
    }
`;

export default function Header(props) {

    return (
        <StyledHeader>

            <div className="banner">
                <img></img>
            </div>
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