import styles from './Item.module.css'

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

import cancelIcon from '../../../static/icon/cancel.png'
import phoneIcon from '../../../static/icon/phone.png'



function Item({ doctor_name, specialty, day, hour, adress }) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAFEVftd-DQsE92d1gSHpPl9r7Uk2RUFcM"
    })

    const position = {
        lat: -23.683946,
        lng: -46.769698
    }

    return (
        <div className={styles.card}>

            <h3 className={styles.doctor_name}>Dr(a).{doctor_name}</h3>
            <p className={styles.specialty}><strong>Especialidade:</strong>{specialty}</p>

            <div className={styles.date}>
                <p><strong>Data:</strong> {day}</p>
                <p><strong>Hora:</strong>{hour}</p>
            </div>
            <div className={styles.route}>
                <p>{adress}</p>
                <div className={styles.map}>

                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={{ width: '100%', height: '100%' }}
                            center={position}
                            zoom={18}
                        >
                            <Marker position={position} />
                        </GoogleMap>
                    ) : <></>}
                </div>

            </div>
            <div className={styles.options}>
                <button><img src={phoneIcon} alt="phone icon" />Ligar</button>

                <button><img src={cancelIcon} alt="phone cancel" />Cancelar</button>
            </div>
        </div>
    )
}

export default Item