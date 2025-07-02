import { HomeStyles } from '../styles/pages/Home.styles.jsx'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navegacao from './ComponentesDePagina/NavFuncionalidades/navegacao.jsx';

function Atletas({ sidebar }) {
    return (
        <div id="divAtletas001">

          <Navegacao />
            <HomeStyles sidebar={sidebar}>
                <h1>Atletas page teste</h1>
                <p>Criar cadastro de atletas</p>
            </HomeStyles>

        </div>


    )
}
export default Atletas