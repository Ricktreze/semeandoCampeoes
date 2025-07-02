
import IncluiUsuario from "./BotoesFuncionalidades/IncluiUsuario"
import ListarUsuarios from "./FomulariosFuncionalidades/ListarUsuarios"
import './Funcionalidades.css'

function Funcionalidades(sidebar) {

    return (
        <div className="divFuncionalidades">
            <IncluiUsuario sidebar={sidebar} />
        </div>

    )

}
export default Funcionalidades