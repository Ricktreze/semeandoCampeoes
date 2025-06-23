import styled from 'styled-components';

export const Container = styled.div`
  background-color:rgb(56, 53, 53);
  position: fixed;
  height: 100%;
  top: 170px;
  left: 0px;
  width: 300px;
  display: 'none';
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;

  @media (max-width: 768px) {
  width: 300px;
  top: 154px;
}

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 30px;
    margin-left: 32px;
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