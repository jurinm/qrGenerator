import './input.css';

const Input = ({...props}) => {
  return (
    <div className='Input'>
      <input 
        type={props.inputType}
        placeholder={props.inputPlaceholder}
        disabled={props.isDisabled}
        onChange={(e) => props.inputOnChange(e.target.value)}
        id={props.inputId}
        maxLength='240'
      />
    </div>
  )
}

export default Input;