import React, { useState, useEffect } from 'react'

import "./Form.css"

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
        // if (name === "cardnumber") {
        //     if (value !== null) {
        //         const v = value
        //             .replace(/\s+/g, "")
        //             .replace(/[^0-9]/gi, "")
        //             .substr(0, 16);
        //         const parts = [];

        //         for (let i = 0; i < v.length; i += 4) {
        //             parts.push(v.substr(i, 4));
        //         }
        //         console.log(v);
        //         console.log("parts", parts);
        //         parts.length > 1 ?
        //             setCardData({ ...cardData, [name]: parts.join(" ") })
        //             :
        //             setCardData({ ...cardData, [name]: value});
        //     }
        // }
        setCardData({ ...cardData, [name]: e.target.value })
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className="name">
                <label htmlFor="card-holder">CARDHOLDER NAME</label>
                <input type="text" required placeholder='eg. Jane Apple'
                    name='cardName' onChange={handlechange}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                    pattern='[A-Za-z]{3}' />
                <span>Please enter your name</span>
            </div>
            <div className="card-number">
                <label htmlFor="card-number">CARD NUMBER</label>
                <input type="text" required placeholder='eg. 1234 5678 9123 000' name='cardnumber' onChange={handlechange} onBlur={handleFocus} focused={focused.toString()} />
                <span>Wrong format numbers only</span>
            </div>
            <div className="card-back">
                <div className='left_card'>
                    <label htmlFor="Exp.Date">EXP.DATE(MM/YY)</label>
                    <div className="mm-yy">
                        <input type="number" name='mm' focused={focused.toString()} />
                        <input type="number" name='yy' focused={focused.toString()} />
                    </div>
                </div>
                <div className='right_card'>
                    <label htmlFor="cvc">CVC</label>
                    <input type="text" name='Cvc' onChange={handlechange} focused={focused.toString()} onBlur={handleFocus} />
                </div>
            </div>
            <button className='button'>Confirm</button>
        </form>
    )
}
// function cc_format(value) {
//     console.log(value);
//     // value != null ? 
//     const v = value
//         .replace(/\s+/g, "")
//         .replace(/[^0-9]/gi, "")
//         .substr(0, 16);
//     const parts = [];

//     for (let i = 0; i < v.length; i += 4) {
//         parts.push(v.substr(i, 4));
//     }

//     return parts.length > 1 ? parts.join(" ") : value;
// }


export default Form