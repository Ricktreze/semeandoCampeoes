import { Link } from 'react-router-dom'
import { BotoesStyles } from '../BotoesFuncionalidades/Botoes.styles'
import Navegacao from '../NavFuncionalidades/navegacao'
import HomeManagerNavegacao from './HomeManagerNavegacao'
function HomeManager({ sidebar }) {
    return (
        <BotoesStyles sidebar={sidebar} >
            <div className='divIncluiUsuario001'>

                <Navegacao />
                <HomeManagerNavegacao />
            </div>
        </BotoesStyles>
    )
}

export default HomeManager