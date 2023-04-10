import React, { useState } from 'react'
import data from '../ShowCase'
import "../App.css"
import shopArrow from "../../public/images/icon-arrow.svg"
import leftArrow from "../../public/images/icon-angle-left.svg"
import rightArrow from "../../public/images/icon-angle-right.svg"

const Carousel = () => {
    const [Data] = useState(data)
    const [slideIndex, setSlideindex] = useState(0)
    const handleNext = () => {
        if(slideIndex===2){
            setSlideindex(0)
        }
        if(slideIndex<2){
            setSlideindex(slideIndex+1)
        }
    }
    const handlePrev = () => {
        if(slideIndex===0){
            setSlideindex(2)
        }
        if(slideIndex>0){
            setSlideindex(slideIndex-1)
        }
    }
    return (
        <>
            <div className="left-top">
                <img src={Data[slideIndex].desktopImage} alt="" className='hero-image' />
            </div>

            <div className="carousel-buttons">
                <button>
                    <img src={leftArrow} alt="" className='buttons-B' onClick={handlePrev} />
                </button>
                <button>
                    <img src={rightArrow} alt="" className='buttons-B' onClick={handleNext} />
                </button>
            </div>
            <div className="right-top">
                <h1 className='slider-heading'>
                    {Data[slideIndex].title}
                </h1>
                <p className='slider-description'>
                    {Data[slideIndex].description}
                </p>
                <div className="shop-link">
                    <button>
                        SHOP NOW
                    </button>
                    <img src={shopArrow} alt="" />
                </div>
            </div>

        </>
    )
}

export default Carousel