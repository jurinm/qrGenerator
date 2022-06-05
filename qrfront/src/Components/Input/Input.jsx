import styles from './input.css';

const Input = ({...props}) => {
  let queryDebounce;
  console.log(styles.input)
  const inputHandler = (e) => {
    
    clearTimeout(queryDebounce)

    queryDebounce = setTimeout(() => {
      props.inputOnChange(e)
    }, 500);
  };

  return (
    <div className='Input'>
      <input 
        type={props.inputType}
        placeholder={props.inputPlaceholder}
        disabled={props.isDisabled}
        onChange={(e) => inputHandler(e.target.value)}
        id={props.inputId}
        maxLength='240'
        value={props.initialValue}
      />
    </div>
  )
}

export default Input;