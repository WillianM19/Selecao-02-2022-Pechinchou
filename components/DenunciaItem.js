import styles from '../styles/DenunciaItem.module.css'

export default function DenunciaItem({item}){
    return(
        <div className={styles.denunciaItem}>
            <h2>{item.title}</h2>
            <p>Data: {item.date}</p>
            <p>Local: {item.place}</p>
            <p>Longitude: {item.longitude}</p>
            <p>Latitude: {item.latitude}</p>
            <p>Tipo de Denúncia: {item.type}</p>
            <p>Descrição: {item.description}</p>
        </div>
    )
}