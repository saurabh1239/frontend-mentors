import { useEffect, useState } from 'react'
import './App.css'
import Steps from './Components/Steps'
import Plans from './Components/Plans'
import Info from './Components/Info';
import Add_ons from './Components/Add_ons';
import Summary from './Components/Summary';
import Thank from './Components/Thank';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
const plansData = [
  {
    id: 1,
    icon: "../../public/assets/images/icon-arcade.svg",
    tittle: "Arcade",
    monthly: "9/mo",
    yearly: "90/yr",
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

  /////info states
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

  ///checkbox states
  const [checkbox, setCheckbox] = useState(
    new Array(3).fill(false)
  )
  const [selectedAddOnnYearlyPlan, setselectedAddOnnYearlyPlan] = useState([]);
  const [selectedAddOnnMonthlyPlan, setselectedAddOnnMonthlyPlan] = useState([]);

  const [selectedMonthlyPlan, setSelectedMonthlyPlan] = useState(
    {
      tittle: "",
      price: 0
    }
  )
  const [selectedYearlyPlan, setSelectedYearlyPlan] = useState(
    {
      tittle: "",
      price: 0
    }
  )
  // console.log("selectedAddOnnMonthlyPlan", selectedAddOnnMonthlyPlan);

  const handlePlans = (e) => {
    setPlanStructure(e);
  }

  ///useState depends on toggle

  useEffect(() => {
    setCheckbox(new Array(3).fill(false))
  }, [yearly])

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
                    <Plans
                      plansData={plansData}
                      handlePlans={handlePlans} planStructure={planStructure}
                      selectedYearlyPlan={selectedYearlyPlan}
                      selectedMonthlyPlan={selectedMonthlyPlan}
                      yearly={yearly}
                      setYearly={setYearly}
                      setPlanStructure={setPlanStructure}
                      setSelectedMonthlyPlan={setSelectedMonthlyPlan}
                      setSelectedYearlyPlan={setSelectedYearlyPlan}
                    />
                  )
                }
                else if (step === 2) {
                  return (
                    <Add_ons
                      yearly={yearly}
                      personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}
                      selectedAddOnnYearlyPlan={selectedAddOnnYearlyPlan}
                      selectedAddOnnMonthlyPlan={selectedAddOnnMonthlyPlan}
                      setselectedAddOnnYearlyPlan={setselectedAddOnnYearlyPlan}
                      setselectedAddOnnMonthlyPlan={setselectedAddOnnMonthlyPlan}
                      checkbox={checkbox}
                      setCheckbox={setCheckbox}
                    />
                  )
                }
                else if (step === 3) {
                  return (
                    <Summary
                      yearly={yearly} setYearly={setYearly}
                      personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}
                      selectedAddOnnMonthlyPlan={selectedAddOnnMonthlyPlan}
                      selectedAddOnnYearlyPlan={selectedAddOnnYearlyPlan}
                      selectedMonthlyPlan={selectedMonthlyPlan}
                      selectedYearlyPlan={selectedYearlyPlan}
                    />
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
              <button onClick={() => setstep((prev) => prev - 1)}
                disabled={step == 0 ? true : false} className='goback'>
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
