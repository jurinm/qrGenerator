import styles from "./button.module.css";

const Button = ({ children, ...props }) => {
  return (
    <div className={styles.buttonConteiner}>
      <button
        onClick={props.buttonClickHandler}
        className={styles.button}
        type="submit"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
