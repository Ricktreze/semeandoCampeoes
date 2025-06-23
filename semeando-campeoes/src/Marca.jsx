import LogoImg from './assets/LogoPrincipal.png'
import './styles/Marca.css'

function Marca(){
    return(
       <>
            <img className="LogoPrincipal" src={LogoImg} />
            <h1 className="NomePrincipal">Semeando Campeões</h1>
       </>
         
    )

}
export default Marca