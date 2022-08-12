import styles from '../styles/NavBar.module.css'
import Link from 'next/link'

export default function NavBar(){

    return (
        <header className={styles.navbar}>
            <h1>Green Save</h1>
            <div>
                <ul>
                    <li><Link href="/"><a>Início</a></Link></li>
                    <li><Link href="/denuncias"><a>Denúncias</a></Link></li>
                    <li><Link href="/denunciar"><a>Nova Denúncia</a></Link></li>
                </ul>
                <p><Link href="/login"><a>Login</a></Link></p>
            </div>
        </header>
    )
}