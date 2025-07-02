import { React, useEffect, useState } from 'react'
import { Container } from './styles/Sidebar.styles'
import { Link, Routes, Route } from 'react-router-dom';
import './styles/Sidebar.css'


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

const Sidebar = ({ active, sidebar }) => {
  const autenticado = localStorage.getItem('aut');
  localStorage.setItem('side', true);
  // const [controleDePagina,setControleDePagina] = useState("null")
  let controleDePagina = 'null'
  let contador = 0
  const closeSidebar = () => {
    active(false)
    localStorage.setItem('side', false);
  }

  useEffect(() => {
    // ando acontece um clique qualquer
    document.body.addEventListener('click', (event) => {

      //Verifico se já é a terceira ou mais execução do useEffect com variacel contador (só de acessr a pagina, o use efect executa duas veze, pos isso a necessidade do Contador)
      // verificao também, se ainda estou na mesma pagina para poder recoler a sidebar, caso constrário ela permanece
      // verifico também no local storage para saber se a side bar está aberta TRUE ou fechada FALSE
      if (contador > 2 && localStorage.getItem('side') && event.view.location.pathname == controleDePagina) {
        active(false)
        localStorage.setItem('side', false);
        window.location.reload()
        contador = -1
      } else if (contador === 0) { // atualizo a pagina que estou na primeira execução frescurenta do useEffect()
        controleDePagina = event.view.location.pathname
      } else if (contador > 2 && localStorage.getItem('side') && event.view.location.pathname != controleDePagina) {
        controleDePagina = event.view.location.pathname
        contador = 1 // para que feche com apenas um clique, na mudança de pagina via menu, uma nóva pagina, sem essa variavel, é necessário 2 cliques 
      }
      contador++
    });
  }, [contador]);

  return (
    <Container sidebar={active} on onChange={closeSidebar}>
      <FaTimes onClick={closeSidebar} />
      <div id="Content">
        <Link className="SideBarLinks" to="/"><SidebarItem Icon={FaHome} Text="Home" /></Link>
        <Link className="SideBarLinks" to="/HorariosTreino"><SidebarItem Icon={FaRegCalendarAlt} Text="Horários Treinos" /></Link>
        {autenticado == "true" ? <Link className="SideBarLinks" to="/Atletas"><SidebarItem Icon={FaRegCalendarAlt} Text="Atletas" /></Link> : <></>}
        <Link className="SideBarLinks" to="/Contato"><SidebarItem Icon={FaRegCalendarAlt} Text="Contato" /></Link>
        <Link className="SideBarLinks" to="/Voluntarios"><SidebarItem Icon={FaRegCalendarAlt} Text="Voluntários" /></Link>
        <Link className="SideBarLinks" to="/Conquistas"><SidebarItem Icon={FaRegCalendarAlt} Text="Conquistas" /></Link>
        <Link className="SideBarLinks" to="/Login"><SidebarItem Icon={FaRegCalendarAlt} Text="Login" /></Link>
        {autenticado == "true" ? <Link className="SideBarLinks" to="/Configuracoes/"><SidebarItem Icon={FaRegCalendarAlt} Text="Configurações" /></Link> : <></>}
      </div>
    </Container>
  )
}

export default Sidebar