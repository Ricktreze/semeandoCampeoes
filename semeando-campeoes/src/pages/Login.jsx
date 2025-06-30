
import { LoginStyles } from '../styles/pages/Home.styles.jsx'
import '../styles/Login.css'
import { useState } from 'react'
import fn from '../fn.jsx'
function Login({ sidebar }) {
   const [usuarioLogado, setUsuarioLogado] = useState(localStorage.getItem('aut'))
   const [loginName, setLoginName] = useState("")
   const [loginPassword, setLoginPassword] = useState("")
   const atualizaLoginName = (event) => {
      setLoginName(event.target.value)
   }
   const atualizaLoginPassword = (event) => setLoginPassword(event.target.value)

   function validaLogin(event) {
      event.preventDefault()
      const objValidaLogin = {
         loginName: loginName,
         loginPassword: loginPassword
      }
      // valida e atualiza variavel de controle de login aut no storage
      fn.validaStamp(objValidaLogin, setUsuarioLogado)
      setLoginName("")
      setLoginPassword("") 
   }
   return (
      <LoginStyles sidebar={sidebar}>
         <div className="DivContainer">
            <form>
               <label name="loginName"> Usuário</label>
               <input
                  onChange={atualizaLoginName}
                  name="loginName"
                  value={loginName}
                  type='text'
                  className='Entrada' />

               <label name="loginPassword"> Senha</label>
               <input
                  onChange={atualizaLoginPassword}
                  name="loginPassword"
                  value={loginPassword}
                  type='password'
                  className='Entrada' />
               <button type='submit' onClick={validaLogin}>Entrar</button>
            </form>
         </div>
      </LoginStyles>
   )
}
export default Login