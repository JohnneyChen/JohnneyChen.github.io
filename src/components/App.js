import React, { useState } from 'react'
import Console from './console/Console'
import "./App.css"

const App = () => {
  const [loaded, setLoaded] = useState(false)

  return (
    <Console/>
  )
}

export default App