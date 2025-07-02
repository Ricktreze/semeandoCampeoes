import styled from 'styled-components';

export const HomeStyles = styled.div`
    background: rgba(255, 255, 255, 0);
    margin-left: ${props => props.sidebar ? '310px' : '10px'};
    color: rgb(0, 0, 0);   
    margin-top: 50px;
    @media (max-width: 768px) {
        margin-left: 0px;
        top: -700px;
    }
}`

export const LoginStyles = styled.div`
    width: 100%; 
    height: 100%;
    background: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    margin-top: 10%;
    margin-left: -4%;      
}`

export const HorariosTreinoStyle = styled.div`
    width: 100%; 
    height: 100%;
    background: rgb(255, 255, 255);
    margin-rigth: "30px";
    color: rgb(0, 0, 0);    
    margin-left: ${props => props.sidebar ? '310px' : '10px'};
    margin-top: 400px;
   
    @media (max-width: 768px) {
         margin-left: 0px;    
    }
}`