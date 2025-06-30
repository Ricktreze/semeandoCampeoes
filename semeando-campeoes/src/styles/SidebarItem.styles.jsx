import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color:white; 
  font-size: 20px;
  color: black;
  padding: 10px;
  border-radius: 10px;
  margin: 0 15px 20px;
  text-decoration: none;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: rgb(56, 53, 53);
    color: white;
  }
`;