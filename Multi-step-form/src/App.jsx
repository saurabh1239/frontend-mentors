import { useState } from 'react'
import './App.css'
import Steps from './Components/Steps'
import Plans from './Components/Plans'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className="form">
        <Steps />
        <div className="form-info">
          <Plans />
        </div>
      </div>
    </div>
  )
}

export default App
