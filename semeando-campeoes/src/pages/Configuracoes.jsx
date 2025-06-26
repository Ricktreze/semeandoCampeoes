import {HomeStyles} from '../styles/pages/Home.styles.jsx'
import Funcionalidades from './ComponentesDePagina/Funcionalidades.jsx'

function Configuracoes({sidebar}){
   return(
    
    <>
        <HomeStyles sidebar={sidebar}>
            <Funcionalidades  sidebar={sidebar}/>
        </HomeStyles>

    </>
   )
}
export default Configuracoes