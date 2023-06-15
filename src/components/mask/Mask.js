import React from 'react'
import './mask.css'

const Mask = () => {
  return (
    <>
      <div className='mask__blur'/>
      <div className='mask__top' data-augmented-ui="b-clip-x border">
      </div>
      <div className='mask__message'>
        [ERROR] INSUFFICENT DIMENSIONS
      </div>
      <div className='mask__bottom' data-augmented-ui="t-clip-x border">
      </div>
    </>
  )
}

export default Mask