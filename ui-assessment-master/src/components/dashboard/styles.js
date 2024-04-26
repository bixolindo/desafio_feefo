import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.text_primary};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 8px;

    .percentage-area{
        width: 100%;
        display: flex;

        div{
            border-right: 1px solid ${props => props.theme.background_color} !important;
        }

    
    }
`;