import React, { useState } from 'react'
import "./Form.css"

const Input = ({ label, name, type, placeholder, onChange, Error, className, pattern , maxlength,max, Min}) => {
    // const [label, name, type, placeholder, onChange, Error] = props;
    const [focused, setFocused] = useState(false);
    return (
        <div className={className}>
            <label htmlFor="">{label}</label>
            <input type={type}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={() => setFocused(true)}
                focused={focused.toString()}
                name={name}
                pattern={pattern} 
                required
                autoComplete='off'
                maxLength={maxlength}
                max={max}
                min={Min}/>
            <span>{Error}</span>
        </div>
    )
}

export default Input;