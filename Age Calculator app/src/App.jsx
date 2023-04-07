import { useState } from 'react'
import './App.css'
import arrow from "../public/assets/images/icon-arrow.svg"

function App() {
  const [date, setDate] = useState({
    DD: null,
    MM: null,
    YYYY: null
  })

  const handleDate = (e) => {
    const { name, value } = e.target;
    for(let i=0;i<3;i++){
      console.log("loop");
      if(value!==null){
        console.log("through");
      }
    }
    // setDate({ ...date, [name]: e.target.value })
    // console.log(date);
  }
  return (
    <div className="App">
      <div className="card">
        <form action="" className="top">
          <div className="input day">
            <label htmlFor="day">DAY</label>
            <input type="text" placeholder='DD' name="DD" onChange={handleDate} />
          </div>
          <div className="input month">
            <label htmlFor="month">MONTH</label>
            <input type="text" placeholder='MM' name='MM' onChange={handleDate} />
          </div>
          <div className="input year">
            <label htmlFor="year">YEAR</label>
            <input type="text" placeholder='YYYY' name='YYYY' onChange={handleDate} />
          </div>
        </form>
        <div className="mid">
          <hr />
          <img src={arrow} alt="" />
        </div>
        <div className="bottom">
          <div className="display years">
            <span className="dot">
              - -
            </span>
            years
          </div>
          <div className="display months">
            <span className="dot">
              - -
            </span>
            months
          </div>
          <div className="display days">
            <span className="dot">
              - -
            </span>
            days
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
