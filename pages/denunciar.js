import styles from '../styles/Denunciar.module.css'
import Btn from '../components/Btn'
import Head from 'next/head'
import Router from 'next/router'
import {useState, useEffect} from 'react'

export default function Denunciar(){
    //variáveis
    const [title, setTitle] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    
    const [place, setPlace] = useState()
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

    const [type, setType] = useState()
    const [description, setDescription] = useState()

    //Pegar sessão atual
    const [activeUser, setActiveUser] = useState()
    useEffect(() => {
        setActiveUser(JSON.parse(localStorage.getItem("activeUser")))
    }, []);

    //Pegar base de dados das denúncias
    const [complaintsData, setComplaintsData] = useState()
    useEffect(() => {
        try {
            setComplaintsData(JSON.parse(localStorage.getItem("complaintsData")))
        } catch {
            setComplaintsData([])
        }
    }, []);


    //cadastrar denúncia
    function registrarDenuncia(e){
        e.preventDefault()

        if(activeUser != null){ //Se usuário estiver logado

            //Criar objeto de denúncia
            let complaint = {
                id: complaintsData.length,
                userid: activeUser.id,//Pega id do usuário da sessão atual
                user: activeUser.fullName,

                title: title,
                date: date,
                time: time,

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
            alert("Denúncia realizada com sucesso!")
            Router.push("/denuncias")
            
        } else {
            alert("Você deve estar logado para registrar uma denúncia")
        }
    }
    
    //Renderização da página se usuário estiver logado ou não
    if (activeUser != null){
        return(
            <>
                <Head>
                    <title>Denunciar - Green Save</title>
                </Head>
                <main className={styles.denunciar}>
                    <h1>Olá {activeUser.name}!</h1>
                    <p>Preencha os campos abaixo para fazer sua denúncia.</p>
                    <form>
                        <div className={styles.denunciaContainer}>
                            <h2>Informações Gerais</h2>
                            <div>
                                <input type="text" placeholder="Titulo da denúncia..." onChange={(e) => setTitle(e.target.value)} required/>
                                <input type="time" placeholder="Hora do ocorrido..." onChange={(e) => setTime(e.target.value)} required/>
                                <input type="date" placeholder="Data do ocorrido..." onChange={(e) => setDate(e.target.value)} required/>
                            </div>
                        </div>
                        <div className={styles.denunciaContainer}>
                            <h2>Localidade</h2>
                            <div>
                                <input type="text" placeholder="Local do ocorrido..." onChange={(e) => setPlace(e.target.value)} required/>
                                <input type="number" placeholder="Latitude..." onChange={(e) => setLatitude(e.target.value)} required/>
                                <input type="number" placeholder="Longitude..." onChange={(e) => setLongitude(e.target.value)} required/>
                            </div>
                        </div>
                        <div className={styles.denunciaContainer}>
                            <h2>Descrição do Crime</h2>
                            <select placeholder="Selecione o tipo do crime..." onChange={(e) => setType(e.target.value)} required>
                                <option value="Não indicado" key="select-none" selected>Selecione um tipo de crime...</option>
                                <option value="Crime contra a fauna" key="select-fauna">Crime contra a fauna</option>
                                <option value="Crime contra a flora" key="select-flora">Crime contra a flora</option>
                                <option value="Ordenamento urbano" key="select-urbano">Crime contra o ordenamento urbano</option>
                                <option value="Patrimônio cultural" key="select-patrimonio">Crime contra o patrimônio cultural</option>
                                <option value="Poluição" key="select-poluicao">Poluição</option>
                                <option value="Outro..." key="select-outro">Outro...</option>
                            </select>
                            <textarea cols="30" rows="10" placeholder="Dê uma breve descrição do ocorrido..." onChange={(e) => setDescription(e.target.value)} required></textarea>
                            <input type="submit" value="Denunciar!" onClick={registrarDenuncia} />
                        </div>
                        <div>
                        </div>
                    </form>
                </main>
            </>
        )
    } else { //Não logado
        return (
            <>
                <Head>
                    <title>Denunciar (Aviso) - Green Save</title>
                </Head>
                <main className={styles.denunciarVisitante}>
                    <div className={styles.denunciarVisitanteAviso}>
                        <div>
                            <h1>Aviso</h1>
                            <p>Para criar uma denúncia é necessário entrar em sua conta!</p>
                        </div>
                        <div>
                            <Btn link="/login">Entrar Agora</Btn>
                            <p>ou</p>
                            <Btn link="/cadastro">Cadastre-se</Btn>
                        </div>
                    </div>
                </main>
            
            </>
        )
    }
}