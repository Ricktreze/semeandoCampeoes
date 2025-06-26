import './IncluiUsuarioFormStyle.css'
import IncluidoComSucesso from './IncluidoComSucesso'
import { useState } from 'react';
import axios from 'axios';

function IncluiUsuarioForm(sidebar){
const [userName,       setUserName      ] = useState("");
const [userFaixa,      setUserFaixa     ] = useState("");
const [userBirthday,   setUserBirthday  ] = useState("");
const [loginPassword,  setLoginPassword ] = useState("");
const [loginName,      setLoginNem      ] = useState("");
const [userGenero,     setUserGenero    ] = useState("");
const [typeUser,       setTypeUser      ] = useState("");

const alteraUserName        = (event) => setUserName(event.target.value)
const alteraUserFaixa       = (event) => setUserFaixa(event.target.value)
const alteraUserBirthday    = (event) => setUserBirthday(event.target.value)
const alteraLoginName       = (event) => setLoginNem(event.target.value)
const alteraLoginPassword   = (event) => setLoginPassword(event.target.value)
const alteraTypeUser        = (event) => setTypeUser(event.target.value)
const alteraUserGener       = (event) => setUserGenero(event.target.value)

    function incluiUsuario(event){
        event.preventDefault()

        const objIncui = {
            userName:       userName,
            userGraduacao:  userFaixa,
            userBirthday:   userBirthday,
            loginName:      loginName,
            loginPassword:  loginPassword,
            typeUser:       typeUser,
            userGenero:     userGenero
        }                                  
        console.log("objIncui", objIncui)
        const response = axios.post('http://localhost:3020/api/appUsers',objIncui )
        if(response){
                alert('Usuásrio incluído com sucesso');
                setUserName("")
                setUserFaixa("")
                setUserBirthday("")
                setLoginNem("")
                setLoginPassword("")
                setTypeUser("")
                setUserGenero("")
                
        }else{
            alert('Erro na inclusão.'+ error.message);
        }    
    }

    return(
        <div>
            <h1>Teste</h1>
            <form className="IncluiUsuarioForm" >

                <label>Nome Completo</label>
                <input type="text" id="userName" value={userName} onChange={alteraUserName} name="userName" />

                <label>Faixa</label>
                <input type="text"  name="userGraduacao" value={userFaixa} onChange={alteraUserFaixa}  />

                <label>Data de nascimento</label>
                <input type="text" name="userBirthday" value={userBirthday} onChange={alteraUserBirthday}></input>

                <label>Nickname para login</label>
                <input type="text" name="loginName" value={loginName} onChange={alteraLoginName}></input>

                <label>Senha inicial</label>
                <input type="password" name="loginPassword" value={loginPassword} onChange={alteraLoginPassword}></input>

                <label>Tipo</label>
                <input type="text" name="typeUser" value={typeUser} onChange={alteraTypeUser}></input>

                <label>Genero:</label>
                <input type="text" name="userGenero" value={userGenero}  onChange={alteraUserGener}></input>               

                <button type='submit' id="cadastrarUsuario" onClick={incluiUsuario}>Entrar</button>
            </form>            
        </div>
    )
  
}

export default IncluiUsuarioForm