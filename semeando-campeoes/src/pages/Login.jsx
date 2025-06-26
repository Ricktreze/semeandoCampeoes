import {LoginStyles} from '../styles/pages/Home.styles.jsx'
import '../styles/Login.css'
function Login({sidebar}){
   return(
    <LoginStyles sidebar={sidebar}>
       <>
        <div className="DivContainer">         
          <form action={"http://localhost:3020/api/systemUsers"} method='get'>
            <label name="loginName"> Usuário</label>
            <input name="loginName" type='text' className='Entrada'></input>
            <label name="loginPassword"> Senha</label>
            <input name="loginPassword" type='password' className='Entrada'></input>
            <button type='submit'>Entrar</button>
          </form>  
      </div>
       </>
    </LoginStyles>
   )
}
export default Login