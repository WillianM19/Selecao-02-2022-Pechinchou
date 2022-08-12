import { useState } from 'react'

export default function Cadastro(){
    //Variáveis
    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [cpf, setCpf] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [passwordConfirm, setPasswordConfirm] = useState()


    function cadastrar(e){
        e.preventDefault()

        if(password == passwordConfirm){ //checa se a senha de confirmação é igual

            //Resgate de dados
            let userData = JSON.parse(localStorage.getItem("userData"))

            //criação do objeto de usuário
            let user = {
                id: userData.length,
                name: name,
                lastName: lastName,
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
            }

        } else {
            alert("As Senhas não correspondem")
        }

    }

    return(
        <main>
            <h1>Cadastro</h1>
            <form>
                <input type="text" placeholder="Nome" required onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="Sobrenome" required onChange={(e) => setLastName(e.target.value)}/>
                <input type="number" placeholder="CPF" required onChange={(e) => setCpf(e.target.value)}/>
                <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" placeholder="Confirmar Senha" required onChange={(e) => setPasswordConfirm(e.target.value)}/>
                
                <input type="submit" placeholder="Cadastrar" value="Enviar" onClick={cadastrar}/>
            </form>
        </main>
    )
}