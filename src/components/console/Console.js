import React from 'react'
import Control from '../control/Control'
import Home from '../home/Home'
import "./console.css"
import Skills from '../skills/Skills'

const Console = () => {
  return (
    <div className='console__background'>
      <div className='console__container' data-augmented-ui="tl-clip-x tr-clip-x border">
        <div className='console__content'>
          <div className='console__title'>
            {/* Console */}
          </div>
          {/* <Home/> */}
          <Skills/>
        </div>
        <Control/>
      </div>
    </div>
  )
}

export default Console