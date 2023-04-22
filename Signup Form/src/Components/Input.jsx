import React, { useState } from 'react'
import "../App.css"
import error from "../../public/images/icon-error.svg"

const Input = ({ type, label, name, pattern, required, errorMessage }) => {
  const [focused, setFocused] = useState(false)
  return (
    <div className='formInputs'>
      {/* <label htmlFor={label}>{label}</label> */}
      <input type={type}
        name={name}
        pattern={pattern}
        placeholder={label}
        className='input error'
        // onChange={onChange}
        onBlur={() => setFocused(true)}
        focused={focused.toString()}
        required />
      <span className='error-icon'>
        <img src={error}></img>
      </span>
      <span>{errorMessage}</span>
    </div>
  )
}

export default Input