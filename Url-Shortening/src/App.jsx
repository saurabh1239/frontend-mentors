import { useState } from 'react'
import './App.css'
import Header from './Components/header'
import Footer from './Components/footer'
import bgWork from '../public/images/illustration-working.svg'

function App() {
  return (
    <div className="App">
      <div className="body">
        <Header />
        <div className='hero'>
          <div className="left">
            <>
              <h1 className='left-h1'>More than just shorter links</h1>
              <p className='hero-p'>Build your brand's recognition and get detailed insights on how your links are performing</p>
            </>
            <button>Get Started</button>
          </div>
          <div className="right">
            <img src={bgWork} alt="" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
