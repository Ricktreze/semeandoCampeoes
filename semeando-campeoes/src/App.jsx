import { useState } from 'react'
import reactLogo from './assets/react.svg'
import BarraSuperior from './BarraSuperior'
import './styles/App.css'
import Marca from "./Marca"
import MenuLateral from './MenuLateral'


function App() {

  return (   
      <div>           
          <BarraSuperior />
          <MenuLateral />
          <Marca />  
      </div>     
  )
}

export default App
