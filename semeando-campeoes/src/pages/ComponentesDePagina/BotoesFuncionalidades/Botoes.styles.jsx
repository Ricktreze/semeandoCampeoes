import styled from 'styled-components';

export const BotoesStyles = styled.div`
    background: rgba(255, 255, 255, 0);
    margin-left: ${props => props.sidebar ? '310px' : '10px'};
    color: rgb(0, 0, 0);   
    margin-top: 50px;
    @media (max-width: 768px) {
        margin-left: 0px;
        top: -700px;
    }
}`