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
const Plans = ({ planStructure, setPlanStructure,
    // setSelectedYearlyPlan, setSelectedMonthlyPlan,
    setYearly, yearly, selectedYearlyPlan, selectedMonthlyPlan }) => {


    ////context
    // const { monthlyPlans } = useContext(PlansContext);
    // const { yearlyPlans } = useContext(PlansContext);
    // const { selectedMonthlyPlan } = useContext(PlansContext);
    // const { selectedYearlyPlan } = useContext(PlansContext);


    const handleToggleYearly = () => {
        setYearly((prev) => !prev);
    };

    const getMonthlyDetails = (id) => {
        selectedMonthlyPlan.tittle = plansData[id].tittle;
        selectedMonthlyPlan.price = plansData[id].monthly;
        // setSelectedMonthlyPlan(selectedMonthlyPlan.tittle = plansData[id].tittle)
        // setSelectedMonthlyPlan(selectedMonthlyPlan.price = plansData[id].monthly)
        console.log(selectedMonthlyPlan);
    };

    const getYearlyDetails = (id) => {
        selectedYearlyPlan.tittle = plansData[id].tittle;
        selectedYearlyPlan.price = plansData[id].yearly;
        // setSelectedYearlyPlan(selectedYearlyPlan.tittle = plansData[id].tittle)
        // setSelectedYearlyPlan(selectedYearlyPlan.price = plansData[id].yearly)
        // setSelectedYearlyPlan.tittle = plansData[id].tittle;
        console.log(selectedYearlyPlan);

        // setNum(id + 1);
    };

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
                    {/* {monthlyPlans.map((item, id) =>
                        <div className="card"
                            key={id}>
                            <img src={item.img} alt="" className="icon" />
                            <div className="card-lower">
                                <span>{item.title}</span>
                                <p>{item.price}</p>
                            </div>
                        </div>

                    )} */}
                    {plansData.map((item, id) =>
                        <div className={planStructure === id ? "card selected" : "card"}
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

                    )}
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