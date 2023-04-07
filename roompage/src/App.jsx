import { useState } from 'react'
import './App.css'
import darkImage from "../public/images/image-about-dark.jpg"
import lightImage from "../public/images/image-about-light.jpg"
import hero from "../public/images/desktop-image-hero-1.jpg"
import data from './ShowCase'
import shopArrow from "../public/images/icon-arrow.svg"
import leftArrow from "../public/images/icon-angle-left.svg"
import rightArrow from "../public/images/icon-angle-right.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="body">
      <div className="top">
        <div className="left-top">
          <img src={hero} alt="" className='hero-image' />
          <ul className='navlinks'>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="carousel-buttons">
            <button>
              <img src={leftArrow} alt=""  className='buttons-B'/>
            </button>
            <button>
              <img src={rightArrow} alt="" className='buttons-B'/>
            </button>
          </div>
        </div>
        <div className="right-top">
          <h1 className='slider-heading'>
            Discover innovative ways to decorate
          </h1>
          <p className='slider-description'>
            We provide unmatched quality, comfort, and style for property owners across the country.
            Our experts combine form and function in bringing your vision to life. Create a room in your
            own style with our collection and make your property a reflection of you and what you love.
          </p>
          <div className="shop-link">
            <button>
              SHOP NOW
            </button>
            <img src={shopArrow} alt="" />
          </div>
        </div>
        {/* We are available all across the globe

        With stores all over the world, it's easy for you to find furniture for your home or place of business.
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
        store locator. Any questions? Don't hesitate to contact us today.

        Shop now

        Manufactured with the best materials

        Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
        to ensure that every product is made as perfect and as consistent as possible. With three decades of
        experience in this industry, we understand what customers want for their home and office.

        Shop now */}
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
