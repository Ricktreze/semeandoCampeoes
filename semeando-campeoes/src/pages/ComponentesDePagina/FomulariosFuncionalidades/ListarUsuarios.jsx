import React, { useState, useEffect } from "react"
import './ListarUsuariosStyles.css'

function ListarUsuarios() {
    const [usuario, setUsuario] = useState(null);
    const [intervalo, setIntervalo] = useState(1000)
    useEffect(() => {
        const consultUsuario = async () => {
            fetch("http://localhost:3020/api/appUsers")
                .then(response => response.json())
                .then(result => setUsuario(result))
                .catch(error => console.error("Erro ao buscar usuários", error))
        }
        consultUsuario();
        setInterval(consultUsuario, intervalo);
      
        
    }, [intervalo]);

    if (usuario) {
        return (
            <div className="divCllistarUsuario">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Faixa</th>
                            <th>CFP</th>
                            <th>Data de Nnscimento</th>
                            <th>Login</th>
                            <th>Tipo</th>
                            <th>Genero</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuario.map((row, index) => (
                            <tr key={index}>
                                <td>{row.userName}</td>
                                <td>{row.userGraduacao}</td>
                                <td>{row.userCpf}</td>
                                <td>{row.userBirthday}</td>
                                <td>{row.loginName}</td>
                                <td>{row.typeUser}</td>
                                <td>{row.userGenero}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
        )
    } else {
        return (
          
            <div className="divCllistarUsuario">
                <p>Carregando...</p>
            </div>
        )
    }
}
export default ListarUsuarios