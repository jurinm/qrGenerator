import './input.css';

const Input = ({...props}) => {
  let queryDebounce;

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
      />
    </div>
  )
}

export default Input;