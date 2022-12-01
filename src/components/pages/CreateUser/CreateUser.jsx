import styles from './CreateUser.module.css'



import { useState } from 'react'

function CreateUser() {

    const [Bairro, setBairro] = useState();
    const [Cidade, setCidade] = useState();
    const [Logradouro, setLogradouro] = useState();

    function onBlurCep(e) {

        const value = e.target.value

        const cep = value?.replace(/[^0-9]/g, '')

        if (cep?.length !== 8) {
            return
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => response.json())
            .then((data) => {
                setBairro(data.bairro)
                setLogradouro(data.logradouro)
                setCidade(data.uf)
            })
    }





    return (
        <div className={styles.container_inputs}>
            <h1>Cadastro de usuário</h1>
            <div className={styles.person}>
                <h2>Dados Pessoais</h2>
                <form >
                    <div className={styles.input_group}>
                        <section>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" placeholder="Digite o seu nome" name="nome" />
                        </section>

                        <section>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="Digite o seu email" />
                        </section>

                        <section>
                            <label htmlFor="telefone">Contato</label>
                            <input type="text" name="telefone" placeholder="Digite um numero de contato" />
                        </section>

                        <section>
                            <label htmlFor="cpf">CPF</label>
                            <input type="text" name="cpf" placeholder="Digite o seu cpf" />
                        </section>

                    </div>
                </form>

                <h2>Endereço</h2>
                <form >
                    <div className={styles.input_group}>
                        <section>
                            <label htmlFor="cep">Cep</label>
                            <input type="text" name="cep" id="cep"
                                placeholder="Digite o seu cep"
                                onBlur={onBlurCep}
                            />
                        </section>

                        <section>
                            <label htmlFor="cidade">Cidade</label>
                            <input type="text" id="cidade" value={Cidade} name="cidade" disabled />
                        </section>

                        <section>
                            <label htmlFor="bairro">Bairro</label>
                            <input type="text" id="bairro" value={Bairro} name="bairro" disabled />
                        </section>

                        <section>
                            <label htmlFor="rua">Rua</label>
                            <input type="text" id="logradouro" value={Logradouro} name="rua" disabled />
                        </section>

                        <section>
                            <label htmlFor="numero">Numero</label>
                            <input type="text" name="numero" placeholder="Digite o numero" />
                        </section>
                    </div>
                </form>

                <h2>Senha</h2>
                <form>
                    <div className={styles.input_group}>
                        <section className={styles.senha}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="Digite a sua senha" />
                            <input type="password" name="senha" placeholder="repita a sua senha" />
                        </section>



                    </div>
                </form>
            </div>

            <input type="submit" value="Confirmar" className={styles.submit_button} />

        </div>
    )
}

export default CreateUser