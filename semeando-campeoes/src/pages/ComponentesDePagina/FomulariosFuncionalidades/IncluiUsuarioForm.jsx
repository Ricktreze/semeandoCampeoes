import './IncluiUsuarioFormStyle.css'
import { useState } from 'react';
import axios from 'axios';
import Navegacao from '../NavFuncionalidades/navegacao';
import { Link } from 'react-router-dom';
import { BotoesStyles } from '../BotoesFuncionalidades/Botoes.styles.jsx'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function IncluiUsuarioForm(sidebar) {
    const [userName, setUserName] = useState("");
    const [userFaixa, setUserFaixa] = useState("");
    const [userCpf, setUserCpf] = useState("");
    const [userBirthday, setUserBirthday] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginName, setLoginNem] = useState("");
    const [userGenero, setUserGenero] = useState("");
    const [typeUser, setTypeUser] = useState("");

    const alteraUserName = (event) => setUserName(event.target.value)
    const alteraUserFaixa = (event) => setUserFaixa(event.target.value)
    const alteraUserCpf = (event) => {
        const onlyNumbers = new RegExp('^[0-9-.]+$')
        const cpfLocalTratado = JSON.stringify(event.target.value).replace('"', '').replace('"', '')
        if ((cpfLocalTratado.length <= 14 && onlyNumbers.test(cpfLocalTratado)) || cpfLocalTratado.length === 0) {
            if (event.nativeEvent.inputType === "insertText") {
                if (cpfLocalTratado.length == 3 || cpfLocalTratado.length == 7) {
                    setUserCpf(`${event.target.value}.`)
                } else if (cpfLocalTratado.length === 11) {
                    setUserCpf(event.target.value + "-")
                } else {
                    setUserCpf(event.target.value)
                }
            } else {
                setUserCpf(event.target.value)
            }
        }

    }
    const alteraUserBirthday = (event) => {
        const userBirthday = JSON.stringify(event.target.value).replace('"', '').replace('"', '')
        if (userBirthday.length <= 10) {
            if (event.nativeEvent.inputType === "insertText") {
                if (userBirthday.length === 2 || userBirthday.length == 5) {
                    setUserBirthday(`${event.target.value}/`)
                } else {
                    setUserBirthday(event.target.value)
                }
            } else {
                setUserBirthday(event.target.value)
            }
        }
    }
    const alteraLoginName = (event) => setLoginNem(event.target.value)
    const alteraLoginPassword = (event) => setLoginPassword(event.target.value)
    const alteraTypeUser = (event) => setTypeUser(event.target.value)
    const alteraUserGener = (event) => setUserGenero(event.target.value)

    function incluiUsuario(event) {
        let campos = ""
        event.preventDefault()
        if (!userName) {
            campos += "Nome\n "
        }
        if (!userBirthday) {
            campos += "Data\n "
        }
        if (!loginName) {
            campos += "Apelido para login\n "
        }
        if (!loginPassword) {
            campos += "Senha\n "
        }
        if (!typeUser) {
            campos += "Tipo\n "
        }
        if (!userGenero) {
            campos += "Genero\n "
        }
        if (campos.length > 0) {
            alert("Campos obrigatórios não preenchidos: " + campos)
            return
        }
        const objIncui = {
            userName: userName,
            userGraduacao: userFaixa,
            userCpf: userCpf,
            userBirthday: userBirthday,
            loginName: loginName,
            loginPassword: loginPassword,
            typeUser: typeUser,
            userGenero: userGenero,
            stampLogin: ""
        }
        const response = axios.post('http://localhost:3020/api/appUsers', objIncui)
        if (response) {
            alert('Usuásrio incluído com sucesso');
            setUserName("")
            setUserFaixa("")
            setUserCpf("")
            setUserBirthday("")
            setLoginNem("")
            setLoginPassword("")
            setTypeUser("")
            setUserGenero("")

        } else {
            alert('Erro na inclusão.' + error.message);
        }
    }

    return (
        <BotoesStyles sidebar={sidebar}>

            <div id="divIncluiUsuarioForm">
                <Navegacao />
                <Link to="/IncluiUsuarioForm">
                    <button className="IncluirUsuarioButton" type="submit">Incluir Usuário</button>
                </Link>
                <form className="IncluiUsuarioForm" >

                    <label>Nome Completo</label>
                    <input
                        type="text"
                        id="userName"
                        value={userName}
                        onChange={alteraUserName}
                        name="userName"
                    />

                    <label for="userGraduacao">Faixa</label>
                    <select id="userGraduacao"
                        name="userGraduacao"
                        value={userFaixa}
                        onChange={alteraUserFaixa} >
                        <option value=""></option>
                        <option value="branca">Branca</option>
                        <option value="azul">Azul</option>
                        <option value="Roxa">Roxa</option>
                        <option value="Maroom">Marrom</option>
                        <option value="Preta">Preta</option>
                    </select>

                    <label>CPF</label>
                    <input type="text"
                        placeholder="Digite um CPF"
                        name="userCpf"
                        value={userCpf}
                        onChange={alteraUserCpf}
                    />

                    <label>Data de nascimento</label>
                    <input
                        value={userBirthday}
                        placeholder="dia/mês/ano"
                        onChange={alteraUserBirthday} />

                    <label>Apelido para login</label>
                    <input
                        type="text"
                        name="loginName"
                        value={loginName}
                        onChange={alteraLoginName} />

                    <label>Senha inicial</label>
                    <input type="password" name="loginPassword" value={loginPassword} onChange={alteraLoginPassword}></input>

                    <label for="typeUser">Tipo</label>
                    <select id="typeUser" name="typeUser" value={typeUser} onChange={alteraTypeUser} >
                        <option value=""></option>
                        <option value="professor">Professor</option>
                        <option value="aluno">Aluno</option>
                        <option value="voluntario">Voluntário</option>
                    </select>

                    <label for="userGenero">Genero:</label>
                    <select id="userGenero" name="userGenero" value={userGenero} onChange={alteraUserGener} >
                        <option value=""></option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>

                    <button type='submit' id="cadastrarUsuario" onClick={incluiUsuario}>Entrar</button>
                </form>
            </div>
        </BotoesStyles>
    )

}

export default IncluiUsuarioForm