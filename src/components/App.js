import React, { useState, useEffect } from 'react'
import Loader from './loader/Loader'
import Console from './console/Console'
import "augmented-ui/augmented-ui.min.css"
import "./App.css"

const App = () => {
  const [loaded, setLoaded] = useState(false)

  return (
    <Console/>
  )
}

export default App