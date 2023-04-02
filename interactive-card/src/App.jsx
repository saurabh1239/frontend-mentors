import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'
// import favicon from "/public/favicon-32*32.png"

function App() {
  return (
    <div className="App">
      <div className="left">
        <div className="card-layout">
          <div className="frontcard">
            <div className="logos">
              <div className='logo1'></div>
              <div className='logo2'></div>
            </div>
            <h1 className="cardnumber-f">1234 4564 7890 4565</h1>
            <span className="cardname-f">felicia liere</span>
          </div>
          <div className="backcard">
          </div>
        </div>
      </div>
      <div className="right">
        <Form />
      </div>
    </div>
  )
}

export default App
