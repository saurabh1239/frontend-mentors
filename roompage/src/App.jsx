import { useState } from 'react'
import './App.css'
import darkImage from "../public/images/image-about-dark.jpg"
import lightImage from "../public/images/image-about-light.jpg"
import Carousel from './components/carousel'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="body">
      <div className="top"> 
          <Carousel/>
      </div>
      <div className="bottom">
        <div className="left img">
          <img src={darkImage} alt="" />
        </div>
        <div className="about">
          <h2>
            About our furniture
          </h2>
          <p >
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </div>
        <div className="right img">
          <img src={lightImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
