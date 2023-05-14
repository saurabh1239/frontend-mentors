import { useState } from 'react'
import './App.css'
import Steps from './Components/Steps'
import Plans from './Components/Plans'
import Info from './Components/Info';
import Add_ons from './Components/Add_ons';
import Summary from './Components/Summary';
import Thank from './Components/Thank';
// import PlansProvider from './Context/PlansContext';
// import AddOnsProvider from './Context/AddsOnContext'
// import PlansContext from './Context/PlansContext';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

function App() {
  const [step, setstep] = useState(0);
  const [planStructure, setPlanStructure] = useState(null);
  const [yearly, setYearly] = useState(false)
  const [personalInfo, setPersonalInfo] = useState({
    Name: "",
    EmailAddress: "",
    PhoneNumber: "",
    PlanType: null,
    AddOnsP: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });

  }
  const [selectedMonthlyPlan, setSelectedMonthlyPlan] = useState({
    tittle: "",
    price: null,
  });

  const [selectedYearlyPlan, setSelectedYearlyPlan] = useState({
    tittle: "",
    price: null
  })

  const handlePlans = (e) => {
    setPlanStructure(e);
    // const Name = personalInfo.PlanType;
    const { PlanType, value } = personalInfo
    console.log(typeof (PlanType));

    // console.log("monthly", planStructure);
    // if (toggle === "month") {
    //   if (planStructure !== null) {
    //     setPersonalInfo({ ...personalInfo, [PlanType]: plansData[planStructure].monthly })
    //   }
    // }
    // else {
    //   if (planStructure !== null) {
    //     setPersonalInfo({ ...personalInfo, [PlanType]: plansData[planStructure].yearly })
    //   }
    // }
  }
  return (
    <BrowserRouter>
      <div className='App'>
        <div className="form">
          <Steps setstep={setstep} step={step} />
          <div className="form-info">
            {
              (() => {
                if (step === 0) {
                  return (
                    <Info personalInfo={personalInfo} setPersonalInfo={personalInfo} handleChange={handleChange} />
                  )
                }
                else if (step === 1) {
                  return (
                    <Plans handlePlans={handlePlans} planStructure={planStructure}
                      setPlanStructure={setPlanStructure} yearly={yearly}
                      setYearly={setYearly}
                      setSelectedMonthlyPlan={setSelectedMonthlyPlan}
                      selectedYearlyPlan={selectedYearlyPlan}
                      setSelectedYearlyPlan={setSelectedYearlyPlan}
                      selectedMonthlyPlan={selectedMonthlyPlan}
                    />
                  )
                }
                else if (step === 2) {
                  return (
                    <Add_ons personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
                  )
                }
                else if (step === 3) {
                  return (
                    <Summary personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
                  )
                }
                else {
                  return (
                    <Thank />
                  )
                }
              })()
            }
            <div className={step === 4 ? "stop" : "steps-buttons"}>
              <button onClick={() => setstep((prev) => prev - 1)} disabled={step == 0 ? true : false} className='goback'>
                {step === 0 ? "" : "Go Back"}
              </button>
              <button onClick={() => setstep((prev) => prev + 1)} className='nextstep'>
                {step === 3 ? "Confirm" : "Next Step"}
              </button>
            </div>
          </div>
        </div>
      </div >
    </BrowserRouter>
  )
}

export default App
