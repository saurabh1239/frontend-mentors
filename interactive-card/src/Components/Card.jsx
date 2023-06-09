import React from 'react'
import "../app.css"

const Card = ({ cardData }) => {
    // console.log("card", cardData);
    return (
        <div className="card-layout">
            <div className="frontcard">
                <div className="logos">
                    <div className='logo1'></div>
                    <div className='logo2'></div>
                </div>
                <h1 className="cardnumber-f">{cardData.cardnumber || 45456455464654}</h1>
                <div className="cardname-f">
                    <p>
                        {cardData.cardName || "saurabh"}
                    </p>
                    <p>
                        {cardData.mm || 11}/ {cardData.yy || 2020}
                    </p>
                </div>
                {/* <div className="expire">
                    
                </div> */}
            </div>
            <div className="backcard">
                <p>
                    {cardData.Cvc || 556}
                </p>
            </div>
        </div>
    )
}

export default Card