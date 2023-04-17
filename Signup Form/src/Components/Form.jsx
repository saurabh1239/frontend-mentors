import React from 'react'
import Data from "../FormData"
import Input from './Input'

const Form = () => {
    return (
        <div className='Form'>
            {Data.map((item, id) =>(
                <Input key={id} type={item.type.toString()} label={item.label} name={item.name} pattern={item.pattern} required={item.required} errorMessage={item.errorMessage} />
            ))}
            <button>CLAIM YOUR FREE TRIAL</button>
            <p>By clicking this you agreeing with our TERMS AND SERVICES</p>
        </div>
    )
}

export default Form