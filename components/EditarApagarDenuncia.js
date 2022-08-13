import styles from '../styles/EditarApagarDenuncia.module.css'
import { useState, useEffect } from 'react';
import Router from 'next/router'

export default function EditarApagarDenuncia({type, idDenuncia}){

    //
    const [complaintsData, setComplaintsData] = useState()
    useEffect(() => {
        try {
            setComplaintsData(JSON.parse(localStorage.getItem("complaintsData")))
        } catch {
            setComplaintsData([])
        }
    }, []);

    function executarProcesso(){
        if (type == "editar"){
            
        } else if (type == "apagar"){
            setComplaintsData(complaintsData.splice(idDenuncia, 1))
            localStorage.setItem("complaintsData", JSON.stringify(complaintsData))
            console.log(complaintsData)
            alert(`Denúncia apagada!`)
            Router.reload(window.location.pathname)
        }
    }

    return (
        <div className={styles.eADenuncia} onClick={executarProcesso}>
            {(type == "editar") ? (//Editar
                <p>Editar</p>
            ) : (//Apagar
                <p>Apagar</p>
            )
            }
        </div>
    )
}