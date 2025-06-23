import {HomeStyles} from '../styles/pages/Home.styles.jsx'
function Home({sidebar}){
   return(
    <HomeStyles sidebar={sidebar}>
       
        <h1>Fundação - 2018</h1>
        <p>
        O Projeto Semeando Campeões (PSC) nasceu de uma parceria com o projeto social de Jiu-Jitsu da 
        IV Igreja Presbiteriana Renovada (IV IPR) de Campo Mourão em 2018. Nesse mesmo ano, o PSC começou a apoiar o
        recém-criado Projeto Social Brothers de Jiu-Jitsu em Iretama. Em 18 de março de 2019, com o objetivo de 
        oferecer aulas de Jiu-Jitsu e defesa pessoal para crianças da comunidade, o PSC se desvinculou da IV IPR e
         passou a ministrar aulas na Escola Municipal Monteiro Lobato (EMMoL). Após o advento da pandemia em 2021, o
          projeto migrou para as dependências da Primeira Igreja Batista de Campo Mourão (PIB). Em 2022, foi fundada 
          a Associação Mourãoense de Jiu-Jitsu para dar suporte ao PSC, que nesse mesmo ano expandiu suas atividades
           para a Associação de Moradores do Lar Paraná. A equipe também desenvolve diversas atividades sociais, como
            arrecadação de alimentos e roupas, e promove tardes recreativas, como o "Treino Arraiá" e o treino com os pais.</p>
    </HomeStyles>
   )
}
export default Home