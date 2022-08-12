import Link from 'next/link'
import styles from '../styles/Btn.module.css'

export default function Btn({link, children}){
    return(
        <Link href={link}>
            <div className={styles.btn}>
                <p>{children}</p>
            </div>
        </Link>
    )
}