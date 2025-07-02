import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color:white; 
  font-size: 20px;
  color: black;
  padding: 10px;
  border-radius: 10px;
  margin: 0 15px 20px;  

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: rgb(151, 151, 151);
    color: white;
   
  }

`;