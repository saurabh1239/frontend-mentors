import { useContext, useState } from "react"
import "../App.css"
import PlansContext from "../Context/PlansContext";
const plansData = [
    {
        id: 1,
        icon: "../../public/assets/images/icon-arcade.svg",
        tittle: "Arcade",
        monthly: 9,
        yearly: 90
    },
    {
        id: 2,
        icon: "../../public/assets/images/icon-advanced.svg",
        tittle: "Advanced",
        monthly: 12,
        yearly: 120
    },
    {
        id: 3,
        icon: "../../public/assets/images/icon-pro.svg",
        tittle: "Pro",
        monthly: 15,
        yearly: 150
    }
]
const Plans = ({ plansData,
    planStructure, setPlanStructure,
    yearly, setYearly,
    selectedYearlyPlan, selectedMonthlyPlan,
    setSelectedYearlyPlan, setSelectedMonthlyPlan }) => {


    ////context
    // const { monthlyPlans } = useContext(PlansContext);
    // const { yearlyPlans } = useContext(PlansContext);
    // const { selectedMonthlyPlan } = useContext(PlansContext);
    // const { selectedYearlyPlan } = useContext(PlansContext);


    const handleToggleYearly = () => {
        setYearly((prev) => !prev);
    };

    const getMonthlyDetails = (id) => {
        setSelectedMonthlyPlan({ tittle: plansData[id].tittle, price: plansData[id].monthly })

    };

    const getYearlyDetails = (id) => {
        setSelectedYearlyPlan({ tittle: plansData[id].tittle, price: plansData[id].yearly })

    };

    //hamdling ui logic
    // const selectplanIcon = (e) => {

    //handling toggle
    const handlePlans = (e) => {
        if (yearly === true) {
            console.log("true");
            getYearlyDetails(e)
        }
        else {
            getMonthlyDetails(e)
        }
    }

    return (
        <div className="plans">
            <div className="upper">
                <div className="title">
                    <h1>Select your plan</h1>
                    <p>you have the option of monthly or yearly billing.</p>
                </div>
                <div className="cards">
                    {yearly ?
                        plansData.map((item, id) =>
                            <div
                                className={planStructure === id ? "card selected" : "card"}
                                key={id}
                                onClick={() => handlePlans(id)}>
                                <img src={item.icon} alt="" className="icon" />
                                <div className="card-lower">
                                    <span>{item.tittle}</span>
                                    {yearly === false ?
                                        <p>${item.monthly}</p> :
                                        <>
                                            <p>${item.yearly}</p>
                                            <span className="add-yr">2 months free </span>
                                        </>
                                    }
                                </div>
                            </div>

                        )
                        :
                        plansData.map((item, id) =>
                            <div
                                className={planStructure === id ? "card selected" : "card"}
                                key={id}
                                onClick={() => handlePlans(id)}>
                                <img src={item.icon} alt="" className="icon" />
                                <div className="card-lower">
                                    <span>{item.tittle}</span>
                                    {yearly === false ?
                                        <p>${item.monthly}</p> :
                                        <>
                                            <p>${item.yearly}</p>
                                            <span className="add-yr">2 months free </span>
                                        </>
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="toggle">
                    <label >Monthly</label>
                    <label className="switch">
                        <input type="checkbox"
                            onChange={handleToggleYearly}
                            checked={yearly}
                        // {...yearly === true ? "checked" : "unchecked"}
                        />
                        <span className="slider round"></span>
                    </label>
                    <label className="yearly-label" >Yearly</label>
                </div>
            </div>

        </div>
    )
}

export default Plans