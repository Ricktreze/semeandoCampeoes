import {HomeStyles} from '../styles/pages/Home.styles.jsx'

function Contato({sidebar}){
   return(
    <div>
        <HomeStyles sidebar={sidebar}>
         <h1>Contato page</h1>
         <p>Criar formulário de contato</p>
        </HomeStyles>
    </div>
   )
}
export default Contato