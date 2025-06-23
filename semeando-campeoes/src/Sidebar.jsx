import React from 'react'
import { Container, Content } from './styles/Sidebar.styles'
import { Link, Routes, Route } from 'react-router-dom';


import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from './SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>           
        <Link to="/"><SidebarItem Icon={FaHome} Text="Home" /></Link>            
        <Link to="/HorariosTreinos"><SidebarItem Icon={FaRegCalendarAlt} Text="Horários Treinos" /></Link>          
        <Link to="/Atletas"><SidebarItem Icon={FaRegCalendarAlt} Text="Atletas" /></Link>
        <Link to="/Contato"><SidebarItem Icon={FaRegCalendarAlt} Text="Contato" /></Link>
        <Link to="/Voluntarios"><SidebarItem Icon={FaRegCalendarAlt} Text="Voluntários" /></Link>
        <Link to="/Conquistas"><SidebarItem Icon={FaRegCalendarAlt} Text="Conquistas" /></Link>
        <Link to="/Login"><SidebarItem Icon={FaRegCalendarAlt} Text="Login" /></Link>
        <Link to="/Configuracoes"><SidebarItem Icon={FaRegCalendarAlt} Text="Configurações" /></Link>
      </Content>
    </Container>
  )
}

export default Sidebar