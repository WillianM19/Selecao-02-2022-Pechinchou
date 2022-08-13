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
                <p>Veja as nossas funcionalidades</p>
                <div className={styles.checkboxItem}><input type="checkbox" checked disabled/><span>Sistema de Login e cadastro</span></div>
                <div className={styles.checkboxItem}><input type="checkbox" checked disabled/><span>Sistema de Criação de Denúncias</span></div>
                <div className={styles.checkboxItem}><input type="checkbox" disabled/><span>Edição de Denúncias</span></div>
                <div className={styles.checkboxItem}><input type="checkbox" checked disabled/><span>Remoção de Denúncias</span></div>
                
            </section>
            <section>
                <h2>Armazenamento de dados</h2>
                <p>O armazenamento foi feito usando o localStorage, que ocasionou alguns problemas em conjuto com next. Devido ao tempo disponível, não foi possível mudar este meio</p>
            </section>
            <section>
                <h2>O Desafio</h2>
                <p>Durante a jornada de 6 dias &#40;Tempo que foi me passada esta tarefa&#41; tive que estudar os mais diversos conteúdos envolvendo as bibliotecas: React e NextJS, apesar que não ter conhecimento em banco de dados conseguir fazer uma espécie de "banco de dados" como os conhecimentos previos que tinha, entretanto o resultado não foi tão satisfatório, percebi que o Next não lida bem com o localStorage e que acabou ocasionando problemas de "Hydratation". Usando o useEffect e useState conseguir contornar alguns deles.</p>
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
                <h3>Conhecimentos Adiquiridos ao longo destes 6 dias</h3>
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
            <section>
                <h2>Sobre Mim</h2>
                <p>Sou Willian, estudante de análise e desenvimento de sistemas - IFRN</p>
                <p>Veja este projeto no github</p>
            </section>
        </main>
    )
}