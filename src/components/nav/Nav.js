import React from 'react'
import "./nav.css"

const Nav = () => {
  const tabs = ["Home", "Skills", "Projects"]

  return (
    <div className="nav__container">
      <div className='nav__left'>
        {
          tabs.map((tab, idx) => {
            return (
              <div key={`nav__item-${idx}`} className='nav__item glitch' title={tab}>
                  {tab}
              </div>
            )
          })
        }

      </div>

      <div className='nav__right'>
        <div className='nav__contact'>
          Contact
        </div>
      </div>
    </div>
  )
}

export default Nav