import React, { useEffect, useState } from 'react'
import '../styles/Slider.css'
import data from '../data/slider.json'

const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(0) ; 
    const [isPaused, setIsPaused] = useState(false) ; 

    // Go to the next image 

    const handleNext = () => {
        setCurrentIndex((prev) => (
            prev === data.length - 1 ? 0 : prev + 1
        ))
    }

    // Go to the previous image 

    const handlePrev = () => {
        setCurrentIndex((prev) => (
            prev === 0 ? data.length - 1 : prev - 1
        ))
    }

    // Auto-slide every 2 seconds, stops when paused 

    useEffect(() => {
        if(!isPaused){
            const interval = setInterval(handleNext, 2000);

            return () => clearInterval(interval)
        }
    },[isPaused, currentIndex])

  return (
    <div className='container'>
        
        {/* Previous Button */}

        <div className='left-btn'>
            <button
                onClick={handlePrev}
            >
                {"<"} 
            </button>
        </div>

        {/* Image and hover handling */}

        <img
            src={data[currentIndex].download_url}
            alt='slider-img'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        />

        {/* Image Number */}

        <p>Image no: {currentIndex + 1}</p>

        {/* Next Button */}

        <div className='right-btn'>
            <button onClick={handleNext}>
                {">"}
            </button>
        </div>

    </div>
  )
}

export default Slider
