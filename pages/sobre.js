import GithubBtn from '../components/GithubBtn'
import styles from '../styles/Sobre.module.css'
export default function Sobre(){
    return(
        <main className={styles.sobre}>
            <h1>Sobre</h1>
            <section>
                <h2>O sistema</h2>
                <p>Para criação deste sistema foram usadas as seguintes tecnologias:</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJs</li>
                    <li>NextJS</li>
                    <li>Git</li>
                </ul>
            </section>
            <section>
                <h2>Features</h2>
                <p>Veja as funcionalidades deste projeto</p>
                <div className={styles.checkboxItem}><input type="checkbox" checked disabled/><span>Sistema de Login e cadastro</span></div>
                <div className={styles.checkboxItem}><input type="checkbox" checked disabled/><span>Sistema de Criação de Denúncias</span></div>
                <div className={styles.checkboxItem}><input type="checkbox" disabled/><span>Edição de Denúncias</span></div>
                <div className={styles.checkboxItem}><input type="checkbox" checked disabled/><span>Remoção de Denúncias</span></div>
                <div className={styles.checkboxItem}><input type="checkbox" disabled/><span>Filtros de denúncias</span></div>
                
            </section>
            <section>
                <h2>O Desafio</h2>
                <p>Durante a jornada de 6 dias &#40;Tempo que foi me passada esta tarefa&#41; tive que estudar os mais diversos conteúdos envolvendo as bibliotecas: <strong>React</strong> e <strong>NextJS</strong>, apesar que não ter conhecimento em banco de dados conseguir fazer uma espécie de "base de dados" com as experiências previas que tinha, usando o <strong>localStorage</strong>. Entretanto, o resultado não foi tão satisfatório. Percebi que o Next não lida bem com o localStorage e que acabou ocasionando problemas de <strong>"Hydratation"</strong> . Usando o <strong>useEffect</strong> e useState conseguir contornar alguns deles.</p>
                <br/>
                <h3>Conhecimentos Prévios que tinha antes deste projeto:</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node Básico</li>
                    <li>Lógica de Programação</li>
                </ul>
                <br/>
                <h3>Conhecimentos Adquiridos ao longo destes 6 dias</h3>
                <ul>
                    <li>ReactJS/NextJS basico</li>
                    <ul>
                        <li>Estruturação de Pastas</li>
                        <li>Fragments</li>
                        <li>Props</li>
                        <li>imports e exports</li>
                        <li>Renderização Condicional</li>
                        <li>Componentes de layout usando o children</li>
                        <li>Renderização de listas, arrays etc...</li>
                        <li>Entre outros...</li>
                    </ul>
                </ul>              
            </section>
        </main>
    )
}