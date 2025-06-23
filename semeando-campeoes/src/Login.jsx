import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/Login.css'
// import './Entrada.css'

function Login({logado}) {

  if(!logado){
    return (
      <div className="DivContainer">         
          <form>
            <label name="usuario"> Usuário</label>
            <input name="entrada" type='text' className='Entrada'></input>
            <label name="senha"> Senha</label>
            <input name="senha" type='password' className='Entrada'></input>
            <button type='submit'>Entrar</button>
          </form>  
      </div>
  )
   }else{
        return (
            <div>Usuário Logado</div>
        )
          }
}

export default Login