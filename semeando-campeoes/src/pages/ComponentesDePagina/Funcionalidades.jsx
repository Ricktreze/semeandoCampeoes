
import IncluiUsuario from "./BotoesFuncionalidades/IncluiUsuario"
import ListarUsuarios from "./FomulariosFuncionalidades/ListarUsuarios"
import './Funcionalidades.css'
function Funcionalidades(sidebar){

    return(
        <div className="divFuncionalidades">
            <IncluiUsuario sidebar={sidebar}/>
            <ListarUsuarios />
        </div>

    )

}
export default Funcionalidades