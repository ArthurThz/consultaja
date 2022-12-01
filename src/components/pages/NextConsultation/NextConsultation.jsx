import { useRef } from "react"
import styles from './NextConsultation.module.css'
import Arrow from '../../../static/icon/arrow.svg'
import Item from "./Item"




function NextConsultation() {
    const slider = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault()
        slider.current.scrollLeft -= slider.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault()

        slider.current.scrollLeft += slider.current.offsetWidth
    }

    return (
        <div className={styles.container}>
            <h1>Minhas Consultas</h1>
            <div className={styles.slider} ref={slider}>
                <Item
                    doctor_name="Fernando Caldeira"
                    specialty="Clinico geral"
                    day="10/11/2022"
                    hour="9:00"
                    adress="Rua Fernando caldeira, 205, 13ª andar"
                />

                <Item
                    doctor_name="Gabriella Oliveira"
                    specialty="Alergista"
                    day="15/11/2022"
                    hour="14:00"
                    adress="Rua Gabriella Oliveira, 210"
                />

                <Item
                    doctor_name="João Das Neves"
                    specialty="Cardiologista"
                    day="01/11/2022"
                    hour="11:00"
                    adress="Rua João Das Neves, 110"
                />

                <Item
                    doctor_name="Douglas Ferreira"
                    specialty="Endocrinologista"
                    day="02/11/2022"
                    hour="17:00"
                    adress="Rua Douglas Ferreira, 10"
                />
            </div>
            <div className={styles.slider_buttons}>
                <button onClick={handleRightClick}><img src={Arrow} alt="Arrow Right" /></button>
                <button onClick={handleLeftClick}><img src={Arrow} alt="Arrow left" /></button>
            </div>
        </div>


    )
}

export default NextConsultation