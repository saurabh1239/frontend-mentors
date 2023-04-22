import { useState } from 'react'
import Form from './Components/Form'
import './App.css'
import background1 from "/bg-intro-desktop.png"

function App() {
  return (
    <div className="App">
      <div className="left">
        <h1>
          Learn to Code by Watching Others
        </h1>
        <p>
          See how experienced developers solve problems in real-time.
          Watching scripted tutorials is great, but understanding how
          developers think in invaluable.
        </p>
      </div>
      <div className="right">
        <div className="offer">
          Try it free 7 days then $20/mo. thereafter
        </div>
        <Form/>
      </div>
    </div>
  )
}

export default App
