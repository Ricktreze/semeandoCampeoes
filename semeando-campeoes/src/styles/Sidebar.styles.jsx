import styled from 'styled-components';

export const Container = styled.div`
  background-color:rgb(56, 53, 53);
  position: absolute;
  top: 170px;
  width: 300px;
  animation: showSidebar .4s;
  

  @media (max-width: 768px) {
  width: 300px;
  top: 154px;
}

  > svg {
    margin-left: 30px;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 30px;
    cursor: pointer;
  }

 

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;