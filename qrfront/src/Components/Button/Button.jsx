import styles from './button.module.css'

const Button = ({...props}) => {
  return (
    <div className={styles.buttonConteiner}>
        <button className={styles.button} type='submit'>{props?.buttonText}</button>
    </div>
  )
}

export default Button;