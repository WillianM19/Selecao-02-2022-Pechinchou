import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function NavBar(){

    try{
        //Pegar sessão atual
        var activeUser = JSON.parse(localStorage.getItem("activeUser"))
    } catch {
        var activeUser = false
    }

    function encerrarSessao(e){
        e.preventDefault()
        console.log("Chamou função")
        localStorage.setItem("activeUser", null)
    }

    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/images/logo.svg" width="50px" height="50px" alt="logo"/>
                <h1>Green Save</h1>
            </div>
            <nav>
                <ul>
                    <li><Link href="/"><a>Início</a></Link></li>
                    <li><Link href="/denuncias"><a>Denúncias</a></Link></li>
                    <li><Link href="/denunciar"><a>Nova Denúncia</a></Link></li>
                </ul>
                {(activeUser || activeUser != null) ? (
                    <ul className={styles.sectionItens}>
                        <li>Sessão: {activeUser.name}</li>
                        <li onClick={encerrarSessao}><Link href="/login"><a>Sair</a></Link></li>
                    </ul>
                ) : (
                    <ul className={styles.sectionItens}>
                        <li><Link href="/login"><a>Entrar</a></Link></li>
                        <li><Link href="/cadastro"><a>Cadastrar-se</a></Link></li>
                    </ul>
                )

                }
            </nav>
        </header>
    )
}