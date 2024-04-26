import styled from 'styled-components';

export const Container = styled.div`
    
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        padding: 1rem;

        gap: 1rem;
        color: ${props => props.theme.text_primary} !important;
        border-bottom: 1px solid ${props => props.theme.background_color};

        .sales-header{
                width: 100%;
                font-weight: bold;
                font-size: 1rem;
                display: flex;
                align-items: baseline;
                justify-content: space-between;

                span {
                        display: flex;
                        gap: 10px;
                }

                .tip{
                        cursor: pointer;

                        &:hover{
                                color: ${props => props.theme.yellow};
                        }
                }
                
        }

        .sales-values {
                margin-top: 1rem;
                color: ${props => props.theme.text_secondary} !important;
                letter-spacing: 1px;

                b{
                        color: ${props => props.theme.text_primary} !important;
                }

        }

    
`;