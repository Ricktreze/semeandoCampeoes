import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navegacao() {
  return (
    <Nav bg="dark" data-bs-theme="dark" justify variant='tabs' defaultActiveKey={"/IncluiUsuario"}>
          <Nav.Item>
            <Nav.Link as={Link} to={"/IncluiUsuario"}>Usuários</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={"/HomeManager"}>Manutenção Página Inicial (HOME)</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={"/HorariosTreinoManager"}>Horários Treinos</Nav.Link>
          </Nav.Item>
    </Nav>
  );
}

export default Navegacao;

