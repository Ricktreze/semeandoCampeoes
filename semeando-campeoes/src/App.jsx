import { useState } from 'react'
import reactLogo from './assets/react.svg'
import BarraSuperior from './BarraSuperior'
import Marca from "./Marca"
import MenuLateral from './MenuLateral'


function App() {

  return (   
      <>           
          <BarraSuperior />
          <div className="divMesmoNivel">
              <MenuLateral />
              <Marca /> 
          </div>
       
         
         
      </>     
  )
}

export default App
