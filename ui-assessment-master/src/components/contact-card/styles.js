import styled from "styled-components";

export const Card = styled.section`
    display: flex;
    flex-direction: row;
    gap: 5px;

    .avatar-img{
        width: 50px;
        height: 50px;
        background-size: contain;
        margin: 5px;

        background-image: url(${props => props.baseUrlImg});
        background-color: ${props => props.theme.yellow};
        border-radius: 8px;
    }

    section {
        padding: 0.5rem 1rem 1rem 1rem;
        color: ${props => props.theme.text_primary} !important;
        display: flex;
        flex-direction: column;
        gap: 4px;
        justify-content: space-evenly;

        h5{
            font-weight: bold;
            font-size: 1rem;
            
        }
        div{
            font-size: 0.8rem;
            font-weight: lighter;
            display: flex;
            align-items: center;
            justify-content: space-between;

            a{
                text-decoration: none;
                color: ${props => props.theme.text_primary} !important;

            }

            svg{
                margin-right: 10px;
            }
        }

    }

    @media (max-width: 800px) {
        section {
            div{
                flex-direction: column;
                align-items: baseline;
                justify-content: space-evenly;
            }
        }
    }

`;


export const ImageIcon = styled.div`
    width: 50px;
    height: 50px;
    background-size: contain;
    margin: 5px;

    background-image: url(${props => props.baseUrlImg});
    background-color: ${props => props.theme.yellow};
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: black;
    font-weight: bold;
`;