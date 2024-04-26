import styled from 'styled-components';

export const Container = styled.div`
    
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        padding: 1rem;

        gap: 0.5rem;

        h4{
                font-size: 2rem;
                font-weight: bold;
                color: ${props => props.theme.light_green}
        }

        p{
                text-transform: uppercase;
                color: ${props => props.theme.text_secondary} !important;
                font-weight: bold;
        }
        
    
`;