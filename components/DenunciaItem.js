import styles from '../styles/DenunciaItem.module.css'
import { useState, useEffect } from 'react'
import EditarApagarDenuncia from './EditarApagarDenuncia';

export default function DenunciaItem({item}){
    //Pegar sessão atual
    const [activeUser, setActiveUser] = useState()
    useEffect(() => {
        setActiveUser(JSON.parse(localStorage.getItem("activeUser")))
    }, []);

    return(
        <div className={styles.denunciaItem}>
            <h2>{item.title}</h2>
            <p><strong>Tipo de Denúncia: </strong><span className={styles.denunciaTipo}> {item.type}</span></p>
            <br/>
            <p><strong>Hora: </strong>{item.time} <strong>Data:</strong> {item.date}</p>
            <p><strong>Local:</strong> {item.place}</p>
            <p><strong>Longitude:</strong> {item.longitude}</p>
            <p><strong>Latitude:</strong> {item.latitude}</p>
            <br/>
            <p><strong>Denúncia Criada por:</strong> {item.user}</p>
            <br/>
            <p><strong>Descrição:</strong></p>
            <div className={styles.description}>
                <p>{item.description}</p>
                <br/>
            </div>

            {activeUser != null &&
            (item.userid == activeUser.id) ? (
                <div className={styles.denunciaItemButtons}>
                    <EditarApagarDenuncia type="editar" idDenuncia={item.id}/>
                    <EditarApagarDenuncia type="apagar" idDenuncia={item.id}/>
                </div>
            ) : (
                <></>
            )
            }
        </div>
    )
}