import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import './styles/MenuLateral.css'
import Sidebar from './Sidebar'
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Atletas from './pages/Atletas';
import Contato from './pages/Contato';
import Voluntarios from './pages/Voluntarios';
import Login from './pages/Login';
import Conquistas from './pages/Conquistas';
import Configuracoes from './pages/Configuracoes';
import IncluiUsuarioForm from './pages/ComponentesDePagina/FomulariosFuncionalidades/IncluiUsuarioForm'
import IncluiUsuario from './pages/ComponentesDePagina/BotoesFuncionalidades/IncluiUsuario';
import HomeManager from './pages/ComponentesDePagina/HomeManager/HomeManager';
import HorariosTreino from './pages/HorariosTreino';
import HorariosTreinoManager from './pages/ComponentesDePagina/ManagerHorariosTreino/HorariosTreinoManager';

function MenuLateral() {
    //  localStorage.setItem('side', "");
    const [sidebar, setSidebar] = useState(false)
    const showSideBar = () => {
        console.log("sidebar", sidebar)
        setSidebar(!sidebar)
    }

    return (
        <div className='divMenuLateral'>
            <FaBars className='FaBars' onClick={showSideBar} />
            <Routes>
                <Route path="/" element={<Home sidebar={sidebar} />} />
                <Route path="/HorariosTreino" element={<HorariosTreino sidebar={sidebar} />} />
                <Route path="/Atletas" element={<Atletas sidebar={sidebar} />} />
                <Route path="/Contato" element={<Contato sidebar={sidebar} />} />
                <Route path="/Voluntarios" element={<Voluntarios sidebar={sidebar} />} />
                <Route path="/Conquistas" element={<Conquistas sidebar={sidebar} />} />
                <Route path="/Login" element={<Login sidebar={sidebar} />} />
                <Route path="/Configuracoes/*" element={<Configuracoes sidebar={sidebar} />} />
                <Route path="/IncluiUsuarioForm" element={<IncluiUsuarioForm sidebar={sidebar} />} />
                <Route path="/IncluiUsuario" element={<IncluiUsuario sidebar={sidebar} />} />
                <Route path="/HomeManager" element={<HomeManager sidebar={sidebar} />} />
                <Route path="/HorariosTreinoManager" element={<HorariosTreinoManager sidebar={sidebar} />} />
              
            </Routes>

            {sidebar && <Sidebar active={setSidebar} sidebar={!sidebar} />}
        </div>
    )
}


export default MenuLateral 