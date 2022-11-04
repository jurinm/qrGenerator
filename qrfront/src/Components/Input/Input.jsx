import styles from "./input.module.css";

const Input = ({ ...props }) => {
  let queryDebounce;
  const inputHandler = (e) => {
    clearTimeout(queryDebounce);

    queryDebounce = setTimeout(() => {
      props.inputOnChange(e);
    }, 200);
  };

  return (
    <div className={styles.input}>
      <label htmlFor={props?.inputId}>{props.labelText}</label>
      <input
        name={props.inputName}
        type={props.inputType}
        placeholder={props.inputPlaceholder}
        disabled={props.isDisabled}
        onChange={(e) => inputHandler(e.target.value)}
        id={props.inputId}
        maxLength="240"
        value={props.initialValue}
      />
    </div>
  );
};

export default Input;
