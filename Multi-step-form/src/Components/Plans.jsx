import { useState } from "react"
import "../App.css"
const plansData = [
    {
        id: 1,
        icon: "../../public/assets/images/icon-arcade.svg",
        tittle: "Arcade",
        monthly: "9/mo",
        yearly: "90/yr"
    },
    {
        id: 2,
        icon: "../../public/assets/images/icon-advanced.svg",
        tittle: "Advanced",
        monthly: "12/mo",
        yearly: "120/yr"
    },
    {
        id: 3,
        icon: "../../public/assets/images/icon-pro.svg",
        tittle: "Pro",
        monthly: "15/mo",
        yearly: "150/yr"
    }
]
const Plans = ({ toggle, setToggle, planStructure, setPlanStructure, handlePlans }) => {

    return (
        <div className="plans">
            <div className="upper">
                <div className="title">
                    <h1>Select your plan</h1>
                    <p>you have the option of monthly or yearly billing.</p>
                </div>
                <div className="cards">
                    {plansData.map((item, id) =>
                        <div className={planStructure === id ? "card selected" : "card"}
                            key={id}
                            onClick={() => handlePlans(id)}>
                            <img src={item.icon} alt="" className="icon" />
                            <div className="card-lower">
                                <span>{item.tittle}</span>
                                {toggle === "month" ?
                                    <p>${item.monthly}</p> :
                                    <>
                                        <p>${item.yearly}</p>
                                        <span className="add-yr">2 months free </span>
                                    </>
                                }
                            </div>
                        </div>

                    )}
                </div>
                <div className="toggle">
                    <label >Monthly</label>
                    <label className="switch">
                        <input type="checkbox"
                            onClick={() => toggle == "month" ? setToggle("year") : setToggle("month")} />
                        <span className="slider round"></span>
                    </label>
                    <label className="yearly-label" >Yearly</label>
                </div>
            </div>

        </div>
    )
}

export default Plans