import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import "./loader.css"

const Loader = ({ setLoaded }) => {
  const [progress, setProgress] = useState(0);

  const fadeOut = (selector) => {
    gsap.to(selector, {
      duration: 1,
      opacity: 0
    })
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          return prev
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      fadeOut(".loader__title")
      fadeOut(".loader__bar-description")
      fadeOut(".loader__bar")

      gsap.to(".loader__container", {
        duration: 1,
        height: "50vh",
        borderRadius: "50%"
      })

      gsap.to(".loader__container", {
        duration: 1,
        height: "50vh",
        borderRadius: "50%"
      })

      gsap.to(".loader__sphere", {
        duration: 2,
        opacity: 1,
        rotate: "360deg"
      })

      gsap.to(".loader__container", {
        duration: 2,
        delay: 1,
        borderColor: "transparent",
      })

      gsap.to(".loader__background", {
        duration: 1,
        delay: 1,
        background: "transparent",
        opacity: 0.5,
        zIndex: 1
      })

      gsap.to(".loader__sphere", {
        delay: 1,
        duration: 100,
        rotate: "720deg"
      })

      setLoaded(true)
    }
  }, [progress])

  return (
    <div className="loader__background">
      <div className="loader__container">
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
    </div>
  )
}

export default Loader