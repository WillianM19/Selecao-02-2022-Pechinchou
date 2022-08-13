import DenunciaItem from "../components/DenunciaItem"
import styles from "../styles/Denuncias.module.css"
import Head from "next/head"
import { useEffect, useState } from "react"

export default function Denuncias(){

    //Pegar base de dados das denúncias
    const [complaintsData, setComplaintsData] = useState()
    useEffect(() => {
        try {
            setComplaintsData(JSON.parse(localStorage.getItem("complaintsData")))
        } catch {
            setComplaintsData(null)
        }
    }, [])

    return(
        <>
            <Head>
                <title>Denúncias - Green Save</title>
            </Head>
            <main className={styles.denuncias}>
                <h1>Todas as Denúncias</h1>
                    <div className={styles.denunciasConteiner}>
                        {(complaintsData != null) ? (
                            complaintsData.map((complaint) => (
                                <DenunciaItem item={complaint} key={complaint.id}/>
                            ))
                        ) : (
                            <p>Não há denuncias por enquanto</p>
                        )
                        }
                    </div>
            </main>
        </>
    )
}