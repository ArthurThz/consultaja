import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { SlEnvolope, SlPhone } from 'react-icons/sl'
import { TbMapPin } from 'react-icons/tb'

import styles from './Footer.module.css'

function Footer() {
    return (
        <footer>
            <div className={styles.info}>
                <div className={styles.social_media}>
                    <span>Redes sociais</span>
                    <section>
                        <a href=""><FaFacebook /></a>
                        <a href=""><FaInstagram /></a>
                    </section>
                </div>

                <div className={styles.about_us}>
                    <span>Quem Somos</span>
                    <section>
                        <a href="">Nossos Fundadores</a>
                        <a href="">Missão, Visão e Valores</a>
                        <a href="">CNPJ</a>

                    </section>
                </div>

                <div className={styles.contact}>
                    <span>Contatos</span>
                    <section>
                        <p><SlEnvolope /> constultaja@consulta.ja.br</p>
                        <p><SlPhone /> (11) 95555-5555</p>
                        <p><TbMapPin /> Rua Consulta ja, 115, Sp, São Paulo</p>
                    </section>
                </div>

            </div>
            <div className={styles.copyright}>
                <span>Consulta já &copy; 2022</span>
            </div>

        </footer>
    )
}

export default Footer