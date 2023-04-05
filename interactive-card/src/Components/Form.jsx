import React, { useEffect } from 'react'
import "./Form.css"


const Form = ({ cardData, setCardData }) => {
    // console.log("form", cardData);
    // useEffect(()=>{

    // },[cardData])
    const handlechange = (e) => {
        const { name, value } = e.target
        if (name === "cardnumber") {
            if (value !== null) {
                const v = value
                    .replace(/\s+/g, "")
                    .replace(/[^0-9]/gi, "")
                    .substr(0, 16);
                const parts = [];

                for (let i = 0; i < v.length; i += 4) {
                    parts.push(v.substr(i, 4));
                }
                console.log(v);
                console.log("parts", parts);
                parts.length > 1 ?
                    setCardData({ ...cardData, [name]: parts.join(" ") })
                    :
                    setCardData({ ...cardData, [name]: value});
            }
        }
setCardData({ ...cardData, [name]: e.target.value })
    }
return (
    <form className='form'>
        <div className="name">
            <label htmlFor="card-holder">CARDHOLDER NAME</label>
            <input type="text" required placeholder='eg. Jane Apple' name='cardName' onChange={handlechange} />
        </div>
        <div className="card-number">
            <label htmlFor="card-number">CARD NUMBER</label>
            <input type="text" required placeholder='eg. 1234 5678 9123 000' name='cardnumber' onChange={handlechange} />
        </div>
        <div className="card-back">
            <div className='left_card'>
                <label htmlFor="Exp.Date">EXP.DATE(MM/YY)</label>
                <div className="mm-yy">
                    <input type="number" name='mm' onChange={handlechange} />
                    <input type="number" name='yy' onChange={handlechange} />
                </div>
            </div>
            <div className='right_card'>
                <label htmlFor="cvc">CVC</label>
                <input type="text" name='Cvc' onChange={handlechange} />
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