
import { useEffect, useState } from 'react'
import styles from './CreateConsultation.module.css'

function CreateConsultation() {
    const [Specialty, setSpecialty] = useState([]);
    const [Doctor, setDoctor] = useState([]);
    const [SelectedValue, setSelectedValue] = useState(0);

    var currentName = ''
    // Consulta API de especialidades
    useEffect(() => {
        fetch('http://localhost:5000/specialty', {
            method: "GET",
            headers: {
                "Content-type": "Application/JSON"
            }
        }).then((res) => res.json())
            .then((data) => setSpecialty(data))
    }, [])



    // Consulta API de médicos
    useEffect(() => {
        fetch('http://localhost:5000/doctor', {
            method: "GET",
            headers: {
                "Content-type": "Application/JSON"
            }
        }).then((res) => res.json())
            .then((data) => setDoctor(data))
            .catch((err) => console.log(err))
    }, [])








    SelectedValue != 0 ? console.log(SelectedValue) : null
    return (
        <div>
            <h1>Nova Consulta</h1>
            <div className={styles.container}>
                <div className={styles.input_control}>
                    <label htmlFor="especialidade">Especialidade</label>
                    <select name="especialidade" onChange={e => setSelectedValue(e.target.value)} >

                        <option value={0} >Escolha uma opção</option>
                        {Specialty.map((item) =>
                            (<option value={item.id} key={item.id}>{item.name}</option>)
                        )}

                    </select>
                </div>
                <div className={styles.doctor_control}>

                    {Doctor.map((item) => {
                        item.IdEspecialidade == SelectedValue ? (<h1>{item.name}</h1>) : console.log('err')


                    })}

                    <button>Cofirmar</button>
                </div>

                <div className={styles.input_control}></div>

            </div>
        </div>
    )
}

export default CreateConsultation