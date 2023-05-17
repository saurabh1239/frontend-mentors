import { useState } from "react"
import "./Add_ons.css"

const addons = [
  {
    id: 1,
    tittle: 'Online service',
    sub: "Access to multiplayer games",
    monthly: "1/mo",
    yearly: "10/yr",
    state: "OnlineService"
  },
  {
    id: 2,
    tittle: 'Larger storage',
    sub: "Extra 1TB of cloud save",
    monthly: "2/mo",
    yearly: "20/yr",
    state: "LargerStorage"
  },
  {
    id: 3,
    tittle: 'Customizable Profile',
    sub: "Custom theme on your profile",
    monthly: "2/mo",
    yearly: "20/yr",
    state: "CustomizableProfile"
  },
]
const Add_ons = ({ yearly, selectedAddOnnYearlyPlan,
  selectedAddOnnMonthlyPlan, setselectedAddOnnYearlyPlan, setselectedAddOnnMonthlyPlan,
  checkbox, setCheckbox }) => {
  // const [OnlineService, setOnlineService] = useState(false)
  // const [LargerStorage, setLargerStorage] = useState(false)
  // const [CustomizableProfile, setCustomizableProfile] = useState(false)

  const handleAddons = (id) => {
    const updatedCheckedState = checkbox.map((item, index) =>
      index === id ? !item : item);
    setCheckbox(updatedCheckedState);
    console.log("first", checkbox);
    if (yearly) {
      addOnInYearlyPlans(id)
    }
    else {
      addOnInMonthlyPlans(id)
    }
  }

  const addOnInMonthlyPlans = (id) => {
    const temp = []
    temp.push(addons[id].tittle, addons[id].monthly)
    setselectedAddOnnMonthlyPlan(prev => [...prev, temp])
    // console.log(selectedAddOnnMonthlyPlan);
  }
  const addOnInYearlyPlans = (id) => {
    const temp = []
    temp.push(addons[id].tittle, addons[id].yearly)
    setselectedAddOnnYearlyPlan(prev => [...prev, temp])
    // selectedAddOnnYearlyPlan.push([addons[id].tittle, addons[id].yearly])
    // console.log(selectedAddOnnYearlyPlan);
  }

  return (
    <div className="addOns">
      <div className="title">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="cards-addon">
        {
          addons.map((item, id) =>
            <div className={checkbox[id] === true ? "card-addon selected" : "card-addon"} key={id} >
              <div className="left-addons">
                <input type="checkbox"
                  checked={checkbox[id]}
                  onChange={() => handleAddons(id)}
                />
                <div className="mid-title">
                  <h3>{item.tittle}</h3>
                  <p>{item.sub}</p>
                </div>
              </div>
              <p className="price">
                {
                  yearly === false ?
                    `+$ ${item.monthly}` :
                    `+$ ${item.yearly}`
                }
              </p>
            </div>
          )
        }
      </div>
    </div>
  )
}
export default Add_ons