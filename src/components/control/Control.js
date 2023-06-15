import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaFolder } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { HiMenu } from 'react-icons/hi'
import { useAtom } from 'jotai'
import { tabAtom } from '../console/Console'
import './control.css'

const Control = () => {
  const [tab, setTab] = useAtom(tabAtom)

  const sections = {
    home: AiFillHome,
    skills: BsFillPersonFill,
    projects: FaFolder
  }

  return (
    <div className='control__wrapper'>
      <div className='control__container' data-augmented-ui="tr-clip-x bl-clip border">
        <div className='control__main-section'>
          {
            Object.keys(sections).map(section => {
              const Icon = sections[section]

              return (
                <div className={`control__button ${tab === section ? "control__button--selected" : ""}`} 
                  data-augmented-ui="tr-clip bl-clip border" 
                  onClick={() => setTab(section)}>
                  <div className='control__button-overlay'>
                    <Icon color='white' size="3vh"/>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='control__toggle'>
          <div className='control__toggle-button' data-augmented-ui="tl-clip tr-clip br-clip bl-clip border">
            <HiMenu color='white' size="3vh"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Control