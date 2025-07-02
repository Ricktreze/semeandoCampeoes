import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function HomeManagerNavegacao(){
    return(
         <Nav bg="dark" data-bs-theme="dark" justify variant='tabs' defaultActiveKey={"/IncluirBannerSuperior"}>
          <Nav.Item>
            <Nav.Link as={Link} to={"/IncluirBannerSuperior"}>Manutenção Banner Superior</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={"/IncluirTexto"}>Manutenção Texto Peincipal</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={"/IncluirBannerLateral"}>Manutenção Banner Lateral</Nav.Link>
          </Nav.Item>
    </Nav>
    )
}

export default HomeManagerNavegacao