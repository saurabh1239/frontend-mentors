import React from 'react'
import "./Form.css"

const Form = () => {
    return (
        <form className='form'>
            <div className="name">
                <label htmlFor="card-holder">CARDHOLDER NAME</label>
                <input type="text" required placeholder='eg. Jane Apple' />
            </div>
            <div className="card-number">
                <label htmlFor="card-number">CARD NUMBER</label>
                <input type="number" required placeholder='eg. 1234 5678 9123 000' />
            </div>
            <div className="card-back">
                <div className='left_card'>
                    <label htmlFor="Exp.Date">EXP.DATE(MM/YY)</label>
                    <div className="mm-yy">
                        <input type="number" />
                        <input type="number" />
                    </div>
                </div>
                <div className='right_card'>
                    <label htmlFor="cvc">CVC</label>
                    <input type="text" />
                </div>
            </div>
            <button className='button'>Confirm</button>
        </form>
    )
}

export default Form