import { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import './styles/MenuLateral.css'
import Sidebar from './Sidebar'
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import HorariosTreinos from './pages/HorariosTreinos';
import Atletas from './pages/Atletas';
import Contato from './pages/Contato';
import Voluntarios from './pages/Voluntarios';
import Login from './pages/Login';
import Conquistas from './pages/Conquistas';
import Configuracoes from './pages/Configuracoes';

function MenuLateral(){
const [sidebar, setSidebar] = useState(false)
const showSideBar = () => setSidebar(!sidebar)
    return(
    <div className='principal'>
        <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>} /> 
        <Route path="/HorariosTreinos" element={<HorariosTreinos sidebar={sidebar}/>} />
        <Route path="/Atletas" element={<Atletas sidebar={sidebar}/>} />
        <Route path="/Contato" element={<Contato sidebar={sidebar}/>} />
        <Route path="/Voluntarios" element={<Voluntarios sidebar={sidebar}/>} />
        <Route path="/Conquistas" element={<Conquistas sidebar={sidebar}/>} />
        <Route path="/Login" element={<Login sidebar={sidebar}/>} />
        <Route path="/Configuracoes" element={<Configuracoes sidebar={sidebar}/>} /> */
        </Routes>
        <FaBars className='FaBars' onClick={showSideBar} />
        {sidebar && <Sidebar active={setSidebar} />}
       
    </div>
    )
}

export default MenuLateral 