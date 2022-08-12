import styles from '../styles/Denunciar.module.css'
import {useState} from 'react'

export default function Denunciar(){
    //variáveis
    const [title, setTitle] = useState()
    const [date, setDate] = useState()
    
    const [place, setPlace] = useState()
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

    const [type, setType] = useState()
    const [description, setDescription] = useState()

    //Pegar sessão atual
    let activeUser = JSON.parse(localStorage.getItem("activeUser"))

    //cadastrar denúncia
    function registrarDenuncia(e){
        e.preventDefault()

        if(activeUser != null){ //Se usuário estiver logado

            //Pegar base de dados das denúncias
            let complaintsData = JSON.parse(localStorage.getItem("complaintsData"))

            //Criar objeto de denúncia
            let complaint = {
                id: complaintsData.length,
                userid: activeUser.id,//Pega id do usuário da sessão atual
                user: activeUser.fullName,

                title: title,
                date: date,

                place: place,
                latitude: latitude,
                longitude: longitude,

                type: type,
                description: description
            }

            //Salvar no objeto no array das denúncias
            complaintsData.push(complaint)

            //Troca array salvo na memoria pelo array atualizado com a nova denúncia
            localStorage.setItem("complaintsData", JSON.stringify(complaintsData))

            //Exibe no console e alerta
            console.log(complaintsData)
            
        } else {
            alert("Você deve estar logado para registrar uma denúncia")
        }
    }
    
    //Renderização da página se usuário estiver logado ou não
    if (activeUser != null){
        return(
            <main className={styles.denunciar}>
                <h1>Olá {activeUser.name}!</h1>
                <p>Preencha os campos abaixo para fazer sua denúncia.</p>
                <form>
                    <input type="text" placeholder="Titulo da denúncia..." onChange={(e) => setTitle(e.target.value)}/>
                    <input type="date" onChange={(e) => setDate(e.target.value)}/>
                    <div>
                        <h2>Localidade</h2>
                        <input type="text" placeholder="Local do ocorrido..." onChange={(e) => setPlace(e.target.value)}/>
                        <input type="number" placeholder="Latitude..." onChange={(e) => setLatitude(e.target.value)}/>
                        <input type="number" placeholder="Longitude..." onChange={(e) => setLongitude(e.target.value)}/>
                    </div>
                    <div>
                        <h2>Descrição do Crime</h2>
                        <select placeholder="Selecione o tipo do crime..." onChange={(e) => setType(e.target.value)}>
                            <option value="Crime contra a fauna" key="select-fauna">Crime contra a fauna</option>
                            <option value="Crime contra a flora" key="select-flora">Crime contra a flora</option>
                            <option value="Crime contra o ordenamento urbano" key="select-urbano">Crime contra o ordenamento urbano</option>
                            <option value="Crime contra o ordenamento urbano" key="select-patrimonio">Crime contra o patrimônio cultural</option>
                            <option value="Poluição" key="select-poluicao">Poluição</option>
                            <option value="Outro..." key="select-outro">Outro...</option>
                        </select>
                        <textarea cols="30" rows="10" placeholder="Dê uma breve descrição do ocorrido..." onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <input type="submit" value="Denunciar!" onClick={registrarDenuncia} />
                </form>
            </main>
        )
    } else { //Não logado
        return (
            <main className={styles.denunciar}>
                <h1>Você precisa estar logado para fazer uma denúncia</h1>
            </main>
        )
    }
}