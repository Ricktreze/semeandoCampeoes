import {BotoesStyles} from '../BotoesFuncionalidades/Botoes.styles.jsx'
import React, { useState } from 'react';
import Navegacao from '../NavFuncionalidades/navegacao.jsx';

function HorariosTreinoManager(sidebar){

   return(
    <BotoesStyles sidebar={sidebar}>
      <Navegacao />
      <p>incluir horários</p>
    </BotoesStyles>
   )
}
export default HorariosTreinoManager