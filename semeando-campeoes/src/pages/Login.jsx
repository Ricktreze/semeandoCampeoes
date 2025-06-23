import {HomeStyles} from '../styles/pages/Home.styles.jsx'
function Login({sidebar}){
   return(
    <HomeStyles sidebar={sidebar}>
       <>
        <div className="DivContainer">         
          <form>
            <label name="usuario"> Usuário</label>
            <input name="entrada" type='text' className='Entrada'></input>
            <label name="senha"> Senha</label>
            <input name="senha" type='password' className='Entrada'></input>
            <button type='submit'>Entrar</button>
          </form>  
      </div>
       </>
    </HomeStyles>
   )
}
export default Login