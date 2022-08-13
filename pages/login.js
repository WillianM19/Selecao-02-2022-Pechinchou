import Link from 'next/link'
import styles from '../styles/Login.module.css'
import {useState} from 'react'
import Router from 'next/router';

export default function Login(){

    //Variáveis
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function iniciarSessao(e){
        e.preventDefault()

        //Resgate de dados
        let userData = JSON.parse(localStorage.getItem("userData"))

        //Busca por usuário dentro do objeto para comparação
        let auxNotFound = 0;
        for (let i = 0; i < userData.length; i++){
            if (userData[i].email == email && userData[i].password == password){ //Se email e senhas forem corretas
                localStorage.setItem("activeUser", JSON.stringify(userData[i]))
                alert("Sessão iniciada com sucesso!")
                Router.push("/denunciar")
                break
            } else { //Procurar depois forma melhor de saber quando o usúario é inexistente
                auxNotFound++
            }
        }
        //compara auxiliar para saber se percorreu toda base de dados
        if(auxNotFound == userData.length ){
            alert("Usuário inexistente ou senha incorreta")
        }
    }

    return(
        <main className={styles.login}>
            <div className={styles.loginForm}>
                <h1>Fazer Login</h1>
                <form>
                    <input type="text" placeholder="Seu Email..." required onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="password" placeholder="Sua Senha..." required onChange={(e) => setPassword(e.target.value)}></input>
                    <input type="submit" value="Entrar" onClick={iniciarSessao}></input>
                </form>
                <p>Ainda não tem uma conta? <Link href="/cadastro"><a>Cadastre-se</a></Link></p>
            </div>
        </main>
    )
}