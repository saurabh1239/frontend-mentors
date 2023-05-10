import { useState } from 'react'
import './App.css'
import Steps from './Components/Steps'
import Plans from './Components/Plans'
import Info from './Components/Info';
import Add_ons from './Components/Add_ons';
import Summary from './Components/Summary';
import Thank from './Components/Thank';

function App() {
  const [step, setstep] = useState(0);
  const [toggle, setToggle] = useState("month");
  const [personalInfo, setPersonalInfo] = useState({
    Name: "",
    EmailAddress: "",
    PhoneNumber: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  }

  return (
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
                  <Plans toggle={toggle} setToggle={setToggle} />
                )
              }
              else if (step === 2) {
                return (
                  <Add_ons toggle={toggle} setToggle={setToggle} />
                )
              }
              else if (step === 3) {
                return (
                  <Summary toggle={toggle} setToggle={setToggle} />
                )
              }
              else {
                return (
                  <Thank />
                )
              }
            })()
          }
          <div className="steps-buttons">
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
  )
}

export default App
