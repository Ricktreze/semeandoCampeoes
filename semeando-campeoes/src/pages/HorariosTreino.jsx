import {HomeStyles} from '../styles/pages/Home.styles.jsx'
import React, { useState } from 'react';
import Navegacao from './ComponentesDePagina/NavFuncionalidades/navegacao.jsx';

function HorariosTreino(sidebar){

   return(
    <HomeStyles sidebar={sidebar}>
      <p>Visão do usuário</p>
    </HomeStyles>
   )
}
export default HorariosTreino