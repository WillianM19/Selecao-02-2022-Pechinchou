import styles from '../styles/Footer.module.css'
import GithubBtn from './GithubBtn'
import Link from 'next/link'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <h1>Green Save</h1>
            <div className={styles.footerContent}>
                <div>
                    <h2>Imagens</h2>
                    <ul>
                        <li><Link href="https://https://unsplash.com"><a>unsplash</a></Link></li>
                        <li><Link href="https://undraw.co"><a>unDraw</a></Link></li>
                        <li><Link href="https://github.com"><a>GitHub</a></Link></li>
                    </ul>
                </div>
                <div>
                    <h2>Ferramentas Usadas</h2>
                    <ul>
                        <li><Link href="https://code.visualstudio.com"><a>VsCode</a></Link></li>
                        <li><Link href="https://git-scm.com"><a>Git</a></Link></li>
                        <li><Link href="https://www.npmjs.com"><a>Npm</a></Link></li>
                    </ul>
                </div>
                <div>
                    <h2>Fontes de Informação</h2>
                    <ul>
                        <li><Link href="https://www.youtube.com"><a>Youtube</a></Link></li>
                        <li><Link href="https://developer.mozilla.org/pt-BR/docs/Web"><a>Mdn Web Docs</a></Link></li>
                        <li><Link href="https://nextjs.org"><a>Nextjs.org</a></Link></li>
                        <li><Link href="https://pt.stackoverflow.com"><a>Stackoverflow</a></Link></li>
                    </ul>
                </div>
                <div>
                    <h2>Outros</h2>
                    <ul>
                        <li><Link href="https://github.com/willianm19"><a>Meu Github</a></Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.gitHubBtn}>
                <GithubBtn />
            </div>
            <div className={styles.endFooter}>
                <p>Willian Micael © 2022</p>
            </div>
        </footer>
    )
}