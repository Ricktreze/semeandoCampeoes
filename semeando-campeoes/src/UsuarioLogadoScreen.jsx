import fn from './fn'
import './styles/UsuarioLogadoScreen.css'
import { useState} from 'react'

function UsuarioLogadoScreen(){
const [usuarioLogado, setUsuarioLogado] = useState(localStorage.getItem('aut'))
    const objValidaLogin = {
         userName: localStorage.getItem('usr'),
         stampLogin: {$gte: Date.now()-600000}// a 10 minutos atrás 600000 representa 10 minutoa
      }
      // valida e atualiza variavel de controle de login aut no storage procedure
      // e através dea eu decido se estou logado ou não 
      fn.validaStamp(objValidaLogin, setUsuarioLogado)
      
   
    return(
        <div className="UsuarioLogadoScreen"> 
            {usuarioLogado?<p>Olá {localStorage.getItem('usr')} Você está logado</p>:<p>Usuário não logado</p>}
        </div>
    )

}

export default UsuarioLogadoScreen