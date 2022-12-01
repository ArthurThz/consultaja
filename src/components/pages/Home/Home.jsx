import styles from './Home.module.css'

// Imagens
import equipamentos from '../../../static/img/equipamentos.png'
import areasImg from '../../../static/img/areas-diversas.jpg'


// Icones
import familia from '../../../static/img/familia.png'
import userSolo from '../../../static/icon/user-solo.svg'
import userFamily from '../../../static/icon/user-family.svg'
import pediatria from '../../../static/icon/pediatria.png'
import clinico from '../../../static/icon/clinico.svg'
import cardiologia from '../../../static/icon/cardiologia.svg'
import fisioterapia from '../../../static/icon/fisio.png'
import oftalmo from '../../../static/icon/oftalmologia.svg'
import dermatologia from '../../../static/icon/dermato.png'







function Home() {
    return (
        <div className={styles.home_container}>
            <div className={styles.presentation}>
                <div className={styles.text}>
                    <h2>Garantimos os melhores e mais qualificados serviços de saúde</h2>
                    <p>Temos um compromisso com nossos clientes, nossa prioridade é proporcianar uma experiência rápida e eficaz para suas consultas.</p>
                    <button>Conheça nossos médicos</button>
                </div>
                <div className={styles.data}>
                    <div className={styles.item}>
                        <div className={styles.left}>
                            <h3>500+</h3>
                            <p>Pacientes todos os dias</p>
                        </div>
                        <div className={styles.center}>
                            <h3>10+</h3>
                            <p>Anos de experiência</p>
                        </div>
                        <div className={styles.right} >
                            <h3>350+</h3>
                            <p>Diagnósticos Confirmados</p>
                        </div>
                    </div>

                </div>
            </div>

            <main>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <div className={styles.left_content}>
                            <img src={equipamentos} alt="equipe medica" />
                        </div>
                        <div className={styles.right_content}>
                            <h2>Investimos Em Tecnologia</h2>
                            <p>Nossos consultórios contam com os mais modernos equipamentos, fazemos questão de obter os melhores resultados</p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.left_content}>
                            <h2>Planos Para Toda Familia</h2>
                            <p>Junte a sua familia com a nossa!</p>
                            <p>Planos adultos e infantis com os melhores preços</p>
                            <div className={styles.group_button}>
                                <button><img src={userSolo} alt="" />  Pessoal</button>
                                <button><img src={userFamily} alt="" /> Familiar</button>
                            </div>
                        </div>
                        <div className={styles.right_content}>
                            <img src={familia} alt="Equipe de medicos" />
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.left_content}>
                            <img src={areasImg} alt="Equipe de medicos" />
                        </div>
                        <div className={styles.right_content}>
                            <h2>Especialidades Diversas</h2>
                            <p>Temos colaboradores em todas as especialidades</p>
                            <p>Garantindo sempre a máxima qualidade para nossos pacientes</p>
                        </div>
                    </div>

                    <div className={styles.speciality}>
                        <div className={styles.description}>
                            <h2>Tratamento de qualidade para você e para quem você ama.</h2>
                            <p>Nossa prioridade é o seu bem-estar, seu feedback nos motiva mais a cada dia. Trabalhamos para ser cada vez melhores.</p>
                        </div>
                        <div className={styles.grid}>
                            <div className={styles.grid_item}>
                                <div className={styles.imgItem}>
                                    <img src={pediatria} />
                                </div>
                                <h3>Pediátria</h3>
                                <p>Garantindo a saúde da sua criança</p>
                            </div>

                            <div className={styles.grid_item}>
                                <div className={styles.imgItem}>
                                    <img src={clinico} />
                                </div>
                                <h3>Clínico Geral</h3>
                                <p>Garantindo a sua saúde</p>
                            </div>

                            <div className={styles.grid_item}>
                                <div className={styles.imgItem}>
                                    <img src={cardiologia} />
                                </div>
                                <h3>Cardiologia</h3>
                                <p>Cuidando do seu coração</p>
                            </div>

                            <div className={styles.grid_item}>
                                <div className={styles.imgItem}>
                                    <img src={fisioterapia} />
                                </div>
                                <h3>Fisioterapia</h3>
                                <p>Fortalecendo você ainda mais</p>
                            </div>

                            <div className={styles.grid_item}>
                                <div className={styles.imgItem}>
                                    <img src={oftalmo} />
                                </div>
                                <h3>Oftalmologia</h3>
                                <p>Sempre de olho na sua visão</p>
                            </div>

                            <div className={styles.grid_item}>
                                <div className={styles.imgItem}>
                                    <img src={dermatologia} />
                                </div>
                                <h3>Dermatologia</h3>
                                <p>Cuidando da sua pele sempre</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Home