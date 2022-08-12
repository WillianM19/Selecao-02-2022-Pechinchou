import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function NavBar(){

    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/images/logo.svg" width="50px" height="50px"/>
                <h1>Green Save</h1>
            </div>
            <nav>
                <ul>
                    <li><Link href="/"><a>Início</a></Link></li>
                    <li><Link href="/denuncias"><a>Denúncias</a></Link></li>
                    <li><Link href="/denunciar"><a>Nova Denúncia</a></Link></li>
                </ul>
                <p><Link href="/login"><a>Login</a></Link></p>
            </nav>
        </header>
    )
}