import axios from 'axios';

function fn() {}

function atualizaStamp(objStampAtualiza ) {
   
    const responseStamp = axios.put('http://localhost:3020/api/appUsers', objStampAtualiza)

    if (responseStamp) {
        // alert('Usuario atualizado');
        //refresh na pagina
        localStorage.setItem('aut', "true");
        // window.location.reload()
    } else {
        localStorage.setItem('aut', "false");
        alert('Erro na atualização de usuario.');
    }
}
//Faz a consulta para ver se o usuário existe 
// precisa ser POST para oider trafegar p body com mair segurança
function validaStamp(objValidaLogin) {
     
      axios.post('http://localhost:3020/api/validaLogin', objValidaLogin)
         .then(response =>  JSON.stringify(response))
         .then(result => {
            // alert("JSON.parse(result).data[0].userName"+JSON.parse(result).data[0].userName)
            if (result ){
                if (JSON.parse(result).data[0]) {
                    localStorage.setItem('usr', JSON.parse(result).data[0].userName);
                    localStorage.setItem('aut', "true");
                     const objStampAtualiza = {
                        _id: JSON.parse(result).data[0]._id,
                        stampLogin:  Date.now()
                    }
                    atualizaStamp(objStampAtualiza)
                    alert('Usuário logado com sucesso');
            
                } else {
                    localStorage.setItem('aut', "false");
                    localStorage.setItem('usr', "");
                // alert('Usuário ou senha inválido' );
                }
            };
                
         })
         .catch(error => {
            // Lógica para tratar erros
            console.error('Erro na requisição POST:', error);
         });

}

export default { fn, validaStamp }