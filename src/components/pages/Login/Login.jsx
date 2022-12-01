import { useState, useEffect } from 'react';


import styles from './Login.module.css'

import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Login() {

    var isLogged = false
    const [User, setUser] = useState('');
    const [Password, setPassword] = useState('');

    const [UsersData, setUsersData] = useState([]);

    // Consulta API Banco de dados
    useEffect(() => {
        fetch('http://localhost:5000/user', {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        }).then((res) => res.json())
            .then((data) => setUsersData(data))

    }, []);


    function verifyLogin() {
        let findUser = UsersData.filter(item => item.cpf === User)

        findUser[0].cpf === User && findUser[0].senha === Password ? isLogged = true : false

        isLogged != false ? console.log("Entrou") : console.log("nao entrou")
    }



    const handleSubmit = (e) => {
        e.preventDefault()

        verifyLogin()
    }


    return (
        <div className={styles.container_login}>
            <div className={styles.left_side}>
            </div>
            <div className={styles.right_side}>
                <h1>Login</h1>
                <div className={styles.login}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.control_input}>
                            <label htmlFor="userName">CPF</label>
                            <input type="text" name="userName" placeholder='Digite o seu CPF' onChange={e => setUser(e.target.value)} />
                        </div>

                        <div className={styles.control_input}>
                            <label htmlFor="userPassword">Senha</label>
                            <input type="password" name="userPassword" placeholder='Digite a sua senha' onChange={e => setPassword(e.target.value)} />
                        </div>

                        <div className={styles.control_input_options}>
                            <section>
                                <input type="checkbox" name="rememberUser" />
                                <label htmlFor="rememberUser">Lembrar de mim</label>
                            </section>

                            <section><a href="">esqueceu a senha?</a></section>
                        </div>

                        <input className={styles.button} type="submit" value="Entrar" />

                        <div className={styles.sign_up}>
                            <span>Não tem uma conta ainda? <Link to="/cadastro" >Cadastre-se</Link></span>
                        </div>

                        <div className={styles.login_social_media}>
                            <span>Entrar com</span>
                            <section>
                                <a href=""><FaFacebook /></a>
                                <a href=""><FaGoogle /></a>
                                <a href=""><FaInstagram /></a>
                            </section>

                        </div>
                    </form>



                </div>
            </div>
        </div>
    )
}
export default Login