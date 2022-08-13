import Link from 'next/link'
import styles from '../styles/Cadastro.module.css'
import Router from 'next/router';
import Head from 'next/head';
import { useState, useEffect } from 'react'

export default function Cadastro(){
    //Variáveis
    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [cpf, setCpf] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [passwordConfirm, setPasswordConfirm] = useState()

    const [userData, setUserData] = useState()
    useEffect(() => {
        try {
            setUserData(JSON.parse(localStorage.getItem("userData")))
        } catch {
            setUserData([])
        }
    }, []);

    function cadastrar(e){
        e.preventDefault()

        if(password == passwordConfirm){ //checa se a senha de confirmação é igual
            
            //criação do objeto de usuário
            let user = {
                id: userData.length,
                name: name,
                lastName: lastName.toCa,
                fullName: `${name} ${lastName}`,
                cpf: cpf,
                email: email,
                password: password
            }
            
            //Checa se o usuário já existe na base dados
            let emailOrCpfExists = false;
            for(let i = 0; i < userData.length; i++){
                if(user.email == userData[i].email || user.cpf == userData[i].cpf){ //se o email ou senha for igual a algum usuário na base de dados
                    alert("Usuário já cadastrado!")
                    emailOrCpfExists = true
                }
            }
            if(emailOrCpfExists == false){ //se não for igual a ninguem
                //Insere o objeto user no array
                userData.push(user)

                //Troca array salvo na memoria pelo array atualizado com o novo usuário
                localStorage.setItem("userData", JSON.stringify(userData))

                //Exibir no console o array e alerta
                console.log(JSON.parse(localStorage.getItem("userData"))) 
                alert("Usuário cadastrado com sucesso!")
                Router.push("/login")
            }

        } else {
            alert("As Senhas não correspondem")
        }

    }

    return(
        <>
            <Head>
                <title>Cadastrar-se - Green Save</title>
            </Head>
            <main className={styles.cadastro}>
                <div className={styles.cadastroForm}>
                    <h1>Cadastro</h1>
                    <form>
                        <div className={styles.nameForm}>
                            <input type="text" placeholder="Nome" required onChange={(e) => setName(e.target.value)}/>
                            <input type="text" placeholder="Sobrenome" required onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <input type="number" placeholder="CPF" required onChange={(e) => setCpf(e.target.value)}/>
                        <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
                        <div className={styles.passForm}>
                            <input type="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)}/>
                            <input type="password" placeholder="Confirmar Senha" required onChange={(e) => setPasswordConfirm(e.target.value)}/>
                        </div>
                        <div className={styles.submitForm}>
                            <input type="submit" value="Cadastrar-se" onClick={cadastrar}/>
                        </div>
                    </form>
                    <p>Já tem uma conta? <Link href="/login">Entrar</Link> </p>
                </div>
            </main>
        </>
    )
}