
import { useEffect, useState } from 'react'
import styles from './CreateConsultation.module.css'

function CreateConsultation() {
    const [Specialty, setSpecialty] = useState([]);
    const [Doctor, setDoctor] = useState([]);
    const [SelectedValue, setSelectedValue] = useState(0);

    const [Data, setData] = useState('');


    // Consulta API de especialidades
    useEffect(() => {
        fetch('http://localhost:5000/specialty', {
            method: "GET",
            headers: {
                "Content-type": "Application/JSON"
            }
        }).then((res) => res.json())
            .then((data) => setSpecialty(data))
            .catch((err) => console.log(err))
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
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <div className={styles.container}>
                <h1>Nova Consulta</h1>
                <div className={styles.input_control}>
                    <label htmlFor="especialidade">Especialidade</label>
                    <select name="especialidade" onChange={e => setSelectedValue(e.target.value)} >
                        <option value={0}>Escolha uma opção</option>

                        {/* Creates options with database values */}
                        {Specialty.map((item) => (<option value={item.id} key={item.id}>{item.name}</option>))}

                    </select>
                </div>
                <div className={styles.doctor_control}>
                    {/* renders the elements based on the selected options */}
                    {Doctor.map((item, i) => {
                        if (item.idEspecialidade != 0 && item.IdEspecialidade == SelectedValue) {

                            return (<>
                                <h1 key={11}>{`Doutor(a) ${item.name}`}</h1>
                                <p key={12}>{`Especialidade: ${item.Especialidade}`}</p>
                                <p key={13}>{`Endereço: ${item.endereco}`}</p>

                                <div className={styles.setDate}>
                                    <select name="data"

                                        // SetData receives the day and hour selected
                                        onChange={(e) => { e.target.value != "default" ? setData(item.agenda[e.target.value]) : null }
                                        }>
                                        <option value="default">Escolha uma data</option>

                                        {/* Renders just avaliable dates */}
                                        {item.agenda.map((data, i) => {
                                            return (<>
                                                <option value={i} key={i}>{`${data.dia} as ${data.hora} horas `}</option>
                                            </>)

                                        })}
                                    </select>
                                </div>
                            </>)
                        }
                    })}
                </div>
                <button className={styles.button}>Confirmar</button>
            </div>
        </div>
    )
}

export default CreateConsultation