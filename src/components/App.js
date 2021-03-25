import React from 'react'

import Navbar from './Navbar'
import Main from './Main'
import About from './About/About'
import Projects from './Projects/Projects'
import Footer from './Footer'
import Contact from './Contact/Contact'

const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Main />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </React.Fragment>
    )
}

export default App