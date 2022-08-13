import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Btn from '../components/Btn'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início - Green Save</title>
      </Head>
      <main className={styles.home}>
        <div className={styles.homeContent}>
          <Image src="/images/logo.svg" width="250px" height="250px" alt="logo" />
          <div className={styles.homeHeroContent}>
            <h1>Green Save</h1>
            <p>Bem vindo ao Green Save!</p> 
            <p>Um sistema destinado ao combate dos crimes ambientais por meio de denúncias.</p>
          </div>
          <Btn link="/denunciar">Denuncie Agora!</Btn>
        </div>
      </main>
    </>
  )
}
