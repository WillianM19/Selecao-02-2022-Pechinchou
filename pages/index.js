import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Btn from '../components/Btn'

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.homeContent}>
        <Image src="/images/logo.svg" width="250px" height="250px" />
        <div className={styles.homeHeroContent}>
          <h1>Green Save</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <Btn link="/denunciar">Denuncie Agora!</Btn>
      </div>
    </main>
  )
}
