import React from 'react'
import { Github, Linkedin, EnvelopeFill } from 'react-bootstrap-icons'

import logo from '../images/main_background.jpg'

const Main = () => {
    return (
        <div className="main-banner header-text" id="top">
            <div className="Modern-Slider">
                <div className="item">
                    <div className="img-fill">
                        <img src={logo} alt="" />
                        <div className="text-content">
                            <h3>Johnney Chen  //  Web Developer</h3>
                            <h5>Backend // React</h5>
                            <a href="https://github.com/JohnneyChen" className="main-stroked-button"><Github color="white" size={30} className="mr-1" />Git Hub</a>
                            <a href="https://www.linkedin.com/in/johnney-chen-9552681bb" className="main-stroked-button"><Linkedin color="white" size={30} className="mr-1" />LinkedIn</a>
                            <a href="mailto:mz2chen@uwaterloo.ca" className="main-stroked-button"><EnvelopeFill color="white" size={30} className="mr-1" />Email</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-down scroll-to-section"><a href="#about"><i className="fa fa-arrow-down"></i></a></div>
        </div>
    )
}

export default Main