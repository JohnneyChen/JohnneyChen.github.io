import React, { useState } from 'react'
import Control from '../control/Control'
import Home from '../home/Home'
import Skills from '../skills/Skills'
import Projects from '../projects/Projects'
import Mask from '../mask/Mask'
import Loader from '../loader/Loader'
import { atom, useAtom } from 'jotai'
import "./console.css"

const tabAtom = atom("home")

const Console = () => {
  const tab = useAtom(tabAtom)[0]
  const [loaded, setLoaded] = useState(false)
  const [showError, setShowError] = useState(false)

  const tabMap = {
    home: Home,
    skills: Skills,
    projects: Projects
  }
  const tabTitles = {
    home: "Console",
    skills: "",
    projects: "Case study"
  }

  const Tab = tabMap[tab]

  function logClientRatio() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const ratio = width / height;
    
    if (ratio < 1.35) {
      setShowError(true)
    } else {
      setShowError(false)
    }
  }
  
  // Attach the function to the window resize event
  window.addEventListener('resize', logClientRatio);

  return (
    <>
      <Loader setLoaded={setLoaded}/>
      <div className='console__background'>
        {
          loaded && 
          (
            <div className='console__container' data-augmented-ui="tl-clip-x tr-clip-x border">
              <div className='console__content'>
                <div className='console__title'>
                  {tabTitles[tab]}
                </div>
                <Tab/>
              </div>
              <Control/>
            </div>
          )
        }
      </div>
      {showError && loaded && <Mask/>}
    </>
  )
}

export default Console
export {
  tabAtom
}