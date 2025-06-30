import { useState } from 'react'
import reactLogo from './assets/react.svg'
import BarraSuperior from './BarraSuperior'
import Marca from "./Marca"
import MenuLateral from './MenuLateral'
import UsuarioLogadoScreen from './UsuarioLogadoScreen.jsx'
import fn from './fn.jsx'


function App() {

  return (   
      <>              
        <BarraSuperior />
        <div className="divMesmoNivel">
            <MenuLateral />
            <Marca /> 
        </div>
          <UsuarioLogadoScreen />   
      </>     
  )
}

export default App
