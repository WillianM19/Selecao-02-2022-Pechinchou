import DenunciaItem from "../components/DenunciaItem"
import styles from "../styles/Denuncias.module.css"

export default function Denuncias(){

    //Pegar base de dados das denúncias
    let complaintsData = JSON.parse(localStorage.getItem("complaintsData"))


    return(
        <main className={styles.denuncias}>
            <h1>Todas as Denúncias</h1>
                <div className={styles.denunciasConteiner}>
                    {
                        complaintsData.map((complaint) => (
                            <DenunciaItem item={complaint} key={complaint.id}/>
                        ))
                    }
                    {(complaintsData.length == 0) ? (
                        <p>Não há denuncias por enquanto</p>
                    ) : (<></>)
                    }
                </div>
        </main>
    )
}