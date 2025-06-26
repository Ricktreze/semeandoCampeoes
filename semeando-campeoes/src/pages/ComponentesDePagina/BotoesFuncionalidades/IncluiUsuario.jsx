
import { Link, Routes, Route } from 'react-router-dom';
import './IncluiUsuario.css'

function IncluiUsuario(sidebar){
    return(
        <div className='divIncluiUsuario001'>
            <Link to="/IncluiUsuarioForm/">
                <button className="IncluirUsuarioButton" type="submit">Incluir Usuário</button>
            </Link>            
       
        </div>
    )
}

export default IncluiUsuario