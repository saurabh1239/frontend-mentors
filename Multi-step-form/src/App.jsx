import { useState } from 'react'
import './App.css'
import Steps from './Components/Steps'
import Plans from './Components/Plans'
import Info from './Components/Info';
import Add_ons from './Components/Add_ons';
import Summary from './Components/Summary';


function App() {
  const [step, setstep] = useState(0);
  console.log(step);

  return (
    <div className='App'>
      <div className="form">
        <Steps setstep={setstep} step={step} />
        <div className="form-info">
          {
            (() => {
              if (step === 0) {
                return (
                  <Info />
                )
              }
              else if (step === 1) {
                return (
                  <Plans />
                )
              }
              else if (step === 2) {
                return (
                  <Add_ons />
                )
              }
              else {
                return (
                  <Summary />
                )
              }
            })()
          }
          <div className="steps-buttons">
            <button>Go Back</button>
            <button>Next Step</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
