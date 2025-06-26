import LogoImg from './assets/LogoPrincipal.png'
import './styles/Marca.css'

function Marca(){
    return(
       <>    
        <h1 className="NomePrincipal">Semeando Campeões</h1>
        <img className="LogoPrincipal" src={LogoImg} />
       </>
         
    )

}
export default Marca