import React from 'react'

const Input = ({...props}) => {
  return (
    <div>
      <input 
        type={props.inputType}
        placeholder={props.inputPlaceholder}
        disabled={props.isDisabled}
        onChange={(e) => props.inputOnChange(e.target.value)}
        id={props.inputId}
      />
    </div>
  )
}

export default Input