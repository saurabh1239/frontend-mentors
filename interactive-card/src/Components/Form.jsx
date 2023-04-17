import React, { useState, useEffect } from 'react'
import "./Form.css"
import Input from './Input.jsx';

const Form = ({ cardData, setCardData }) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handlechange = (e) => {
        const { name, value } = e.target
        setCardData({ ...cardData, [name]: e.target.value })
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <Input label="CARDHOLDER NAME" type="text" placeholder="Jane Apple" name="cardName" onChange={handlechange} Error="Please enter your name" className="name" pattern='[A-Za-z]{6}' maxlength='8' />
            {/* <label htmlFor="card-holder">CARDHOLDER NAME</label>
                <input type="text" required placeholder='eg. Jane Apple'
                    name='cardName' onChange={handlechange}
                    onBlur={()=>setFocused(true)}
                    focused={focused.toString()}
                    pattern='[A-Za-z]{3}' />
                <span>Please enter your name</span> */}
            <Input label="CARD NUMBER" type="text" placeholder="1131 1231 3212 1122" onChange={handlechange} Error="wrong Format" className="card-number" name='cardnumber' pattern='[0-9]{12}'  maxlength="14"/>
            {/* <label htmlFor="card-number">CARD NUMBER</label>
                <input type="text" required placeholder='eg. 1234 5678 9123 000' name='cardnumber' onChange={handlechange} onBlur={()=>setFocused(true)} focused={focused.toString()} />
                <span>Wrong format numbers only</span> */}
            <div className="card-back">
                <div className='left_card'>
                    <Input label="EXP.Date" type="number" placeholder="12" onChange={handlechange} Error="wrong Format" className="mm-yy" name="mm" max="12" Min="1"/>
                    <Input label="(MM/YY)" type="number" placeholder="2022" onChange={handlechange} Error="wrong Format" className="mm-yy" name="yy" max="2045" Min="2023"/>
                    {/* <label htmlFor="Exp.Date">EXP.DATE(MM/YY)</label>
                    <div className="mm-yy">
                        <input type="number" name='mm' focused={focused.toString()} onBlur={()=>setFocused(true)}/>
                        <input type="number" name='yy' focused={focused.toString()} onBlur={()=>setFocused(true)}/>
                    </div> */}
                </div>
                <Input label="CVC" type="number" placeholder="229" onChange={handlechange} Error="wrong Format" className="right_card" name="Cvc"/>
                {/* <div className='right_card'>
                    <label htmlFor="cvc">CVC</label>
                    <input type="text" name='Cvc' onChange={handlechange} focused={focused.toString()} onBlur={() => setFocused(true)} />
                </div> */}
            </div>
            <button className='button'>Confirm</button>
        </form>
    )
}

export default Form