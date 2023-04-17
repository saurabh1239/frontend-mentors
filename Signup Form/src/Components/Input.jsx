import React from 'react'
import "../App.css"

const Input = ({ type,label,name,pattern,required,errorMessage }) => {
  return (
    <div className='formInputs'>
        {/* <label htmlFor={label}>{label}</label> */}
        <input type={type} name={name}  pattern={pattern} required={required} placeholder={label}/>
        <span>{errorMessage}</span>
    </div>
  )
}

export default Input