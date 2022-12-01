import styles from './Input.module.css'


function Input({ onChange, type, placeholder, classname, name, description, disabled }) {

    return (
        <div className={styles.Input_control}>
            <label htmlFor={name}>{description}</label>
            <input className={classname}
                type={type}
                placeholder={placeholder}
                name={name}
                disabled={disabled}
                onChange={onChange}
            />
        </div>

    )

}

export default Input