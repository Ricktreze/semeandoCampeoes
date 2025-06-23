import styled from 'styled-components';

export const HomeStyles = styled.div`
    width: 100%; 
    height: 100%;
    background: rgb(255, 255, 255);
    left: ${props => props.sidebar ? '300px' : '0px'};
    color: rgb(75, 57, 57);
    margin-top: -250px;
    
    @media (max-width: 768px) {
    left: ${props => props.sidebar ? '200px' : '0px'};
    }
}`

