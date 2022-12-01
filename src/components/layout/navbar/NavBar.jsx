import { Link } from 'react-router-dom'

import styles from './NavBar.module.css'

import userIcon from '../../../static/icon/user-icon.png'
import heatlhIcon from '../../../static/icon/health.png'

function NavBar() {

    return (

        <header>

            <div className={styles.nav_left}>
                <h1>Consulta já</h1>
                <Link to="/"><img src={heatlhIcon} alt="icon consultaja" /></Link>
            </div>

            <div className={styles.nav_right}>


                <Link to="/">Home</Link>
                <Link to="/novaconsulta">Nova Consulta</Link>
                <Link to="/minhasconsultas">Minhas Consultas</Link>

                <div className={styles.user}>
                    <Link to="/login">Login</Link>
                    <img src={userIcon} alt="User image" />

                </div>
            </div>



        </header>
    )
}

export default NavBar