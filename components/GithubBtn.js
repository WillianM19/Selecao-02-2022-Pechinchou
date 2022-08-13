import Image from "next/image"
import Link from "next/link"
import styles from "../styles/GithubBtn.module.css"

export default function GithubBtn(){
    return(
        <Link href="https://github.com/WillianM19/Selecao-02-2022-Pechinchou">
            <div className={styles.githubBtn}>
                <Image src="/icons/github.png" alt="github-logo" width="30px" height="30px"/>
                <p>Veja este projeto no Github</p>
            </div>
        </Link>
    )
}