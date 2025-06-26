import {HorariosTreinoStyle} from '../styles/pages/Home.styles.jsx'
import React, { useState } from 'react';


const horarios = [
  { dia: 'Segunda', hora: '08:00', treino: 'Musculação' },
  { dia: 'Segunda', hora: '10:00', treino: 'Cardio' },
  { dia: 'Terça', hora: '09:00', treino: 'Yoga' },
  { dia: 'Quarta', hora: '18:00', treino: 'Lutas' },
];

const DiaTreino = ({ dia, horariosDoDia }) => {
  return (
    <div>
      <h3>{dia}</h3>
      {horariosDoDia.map((horario, index) => (
        <div key={index}>
          {horario.hora} - {horario.treino}
        </div>
      ))}
    </div>
  );
};
function HorariosTreino({sidebar}){
const [treinos, setTreinos] = useState(horarios);
  const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

   return(
    <HorariosTreinoStyle sidebar={sidebar}>
        <h1>Horários de treino</h1>
        {diasDaSemana.map((dia) => (
            <DiaTreino
            key={dia}
            dia={dia}
            horariosDoDia={treinos.filter((t) => t.dia === dia)}
            />
        ))}

    </HorariosTreinoStyle>
   )
}
export default HorariosTreino