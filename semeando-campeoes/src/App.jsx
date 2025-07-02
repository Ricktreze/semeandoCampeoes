import { useState } from 'react'
import BarraSuperior from './BarraSuperior'
import Marca from "./Marca"
import MenuLateral from './MenuLateral'
import UsuarioLogadoScreen from './UsuarioLogadoScreen.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (   
      <>              
        <BarraSuperior />
        <div className="divMesmoNivel">
                <Marca /> 
            <MenuLateral />
      
        </div>
          <UsuarioLogadoScreen />   
      </>     
  )
}

export default App
