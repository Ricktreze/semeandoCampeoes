
import { Link, Routes, Route } from 'react-router-dom';
import './IncluiUsuario.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navegacao from '../NavFuncionalidades/navegacao';
import ListarUsuarios from '../FomulariosFuncionalidades/ListarUsuarios';
import {BotoesStyles} from './Botoes.styles.jsx'

function IncluiUsuario(sidebar) {
    
    return (
        <BotoesStyles sidebar={sidebar} >
            <div className='divIncluiUsuario001'>

                <Navegacao />
                <Link to="/IncluiUsuarioForm">
                    <button className="IncluirUsuarioButton" type="submit">Incluir Usuário</button>
                </Link>
                <ListarUsuarios />

            </div>
        </BotoesStyles>
    )
}

export default IncluiUsuario