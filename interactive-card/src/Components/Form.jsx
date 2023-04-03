import React, { useEffect } from 'react'
import "./Form.css"

const Form = ({ cardData, setCardData }) => {
    console.log("form",cardData);
    // useEffect(()=>{

    // },[cardData])
    const handlechange = (e) => {
        const {name,value} = e.target
        setCardData({ ...cardData, [name]: e.target.value })
    }
    return (
        <form className='form'>
            <div className="name">
                <label htmlFor="card-holder">CARDHOLDER NAME</label>
                <input type="text" required placeholder='eg. Jane Apple' name='cardName' onChange={handlechange}/>
            </div>
            <div className="card-number">
                <label htmlFor="card-number">CARD NUMBER</label>
                <input type="number" required placeholder='eg. 1234 5678 9123 000' name='cardnumber' onChange={handlechange}/>
            </div>
            <div className="card-back">
                <div className='left_card'>
                    <label htmlFor="Exp.Date">EXP.DATE(MM/YY)</label>
                    <div className="mm-yy">
                        <input type="number" name='mm' onChange={handlechange}/>
                        <input type="number" name='yy' onChange={handlechange}/>
                    </div>
                </div>
                <div className='right_card'>
                    <label htmlFor="cvc">CVC</label>
                    <input type="text" name='Cvc' onChange={handlechange}/>
                </div>
            </div>
            <button className='button'>Confirm</button>
        </form>
    )
}

export default Form