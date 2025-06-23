import {HomeStyles} from '../styles/pages/Home.styles.jsx'
function Configuracoes({sidebar}){
   return(
    <HomeStyles sidebar={sidebar}>
        <h1>Home page teste</h1>
        <p>Essa pagina será acessada apenas por administradores, poderá ser cadastrado novo atleta e novos horários</p>
    </HomeStyles>
   )
}
export default Configuracoes