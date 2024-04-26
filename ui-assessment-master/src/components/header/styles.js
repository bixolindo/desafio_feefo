import styled from 'styled-components';

export const Container = styled.div`
    
        width: 80%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        color: ${props => props.theme.text_primary};

    
        h1 {
            flex: 4;
            font-size: 2rem;
            flex-shrink: 1;
            font-weight: lighter;
        }

        section{
            flex: 6;
            color: ${props => props.theme.text_secondary};

            h3{
                padding: 0.4rem;
                text-transform: uppercase;
                letter-spacing: 2px;
            }
        }
    
`;