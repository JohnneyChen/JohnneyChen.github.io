import React from 'react'
import Typed from 'react-typed'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import "./home.css"

const Home = () => {
  return (
    <div className='home__container'>
      <div className="home__command-text glitch" title="root「」~ ᑀ API_KEY=3db7ca618243da1ba3bc76ab14bcf07b && Portfolio.js">
        root「」~ ᑀ API_KEY=3db7ca618243da1ba3bc76ab14bcf07b && Portfolio.js
      </div>
      <div className='home__auto-typed-text'>
        <Typed
          startDelay={3} 
          strings={["Johnney Chen // Software Developer"]} 
          loop={false} 
          showCursor={true}
          typeSpeed={50}/>
      </div>
      <div className='home__socials-container'>
        <a href='https://www.linkedin.com/in/johnney-chen-9552681bb/'
          target="_blank" 
          className='home__social-button-pulse'>
            <BsLinkedin size="3vh" color="white"/>
        </a>
        <a href='https://github.com/JohnneyChen'
          target="_blank" 
          className='home__social-button-pulse'>
            <BsGithub size="3vh" color="white"/>
        </a>
      </div>
    </div>
  )
}

export default Home