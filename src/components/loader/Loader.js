import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import "./loader.css"

const Loader = ({ setLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          return prev
        }
        return prev + 1
      })
    }, 10)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      setFade(true)
      setTimeout(() => {
        setLoaded(true)
      }, 300)
    }
  }, [progress])

  return (
    <div className={`loader__container ${fade ? "loader__container--finished" : ""}`} 
    data-augmented-ui="tl-clip tr-2-clip-x br-clip bl-clip-x border">
      <div className='loader__title'>
        L
        <div className='loader__dot'/>
        OADING EXPERIENCE
        <div className='loader__title-underline'/>
      </div>
      <div className="loader__bar">
        <div className="loader__bar-inner" style={{ width: `${progress}%`}}></div>
      </div>
      <div className="loader__bar-description">
          <div className='loader__bar-start'>
            0%
          </div>
          <div className='loader__bar-end'>
            {progress}%
          </div>
        </div>
    </div>
  )
}

export default Loader