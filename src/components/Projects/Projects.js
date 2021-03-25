import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import ProjectDisplay from './ProjectDisplay'

import bread from '../../images/bread.png'
import camp from '../../images/camp.png'
import task from '../../images/task.png'
import quiz from '../../images/quiz.png'

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <section class="section" id="features">
            <div class="container">
                <h2>My projects</h2>
                <h4 className="mb-5">Personal // professional</h4>
                <div class="row">
                    <ProjectDisplay aos="fade" title="Bakery app" description="A shop built using MySQL and MongoDB with authentication, authorization,
                            shopping cart, and Stripe integration." appLink="https://johnneybakeryapp.herokuapp.com/" codeLink="https://github.com/JohnneyChen/BakeryApp"
                        imgLink={bread}></ProjectDisplay>
                    <ProjectDisplay aos="fade" title="YelpCamp" description="A yelp-like app made with MongoDB with authentication, CRUD commenting, and CRUD
                            campgrounds." appLink="https://agile-cliffs-83809.herokuapp.com/" codeLink="https://github.com/JohnneyChen/YelpCamp"
                        imgLink={camp}></ProjectDisplay>
                    <ProjectDisplay aos="fade" title="Eng Quiz" description="Integrated data collection, query, drag and drop dashboard with charts, and optimized template logic of pre-existing application" appLink="https://copyofengquiz.herokuapp.com/" codeLink="https://github.com/JohnneyChen/UW_Eng_Placement_Quiz"
                        imgLink={quiz}></ProjectDisplay>
                    <ProjectDisplay aos="fade" title="Task manager" description="A To-do list app made with MySQL with date logic." appLink="https://johnneytaskmanager.herokuapp.com/sections" codeLink="https://github.com/JohnneyChen/TaskManager"
                        imgLink={task}></ProjectDisplay>
                </div>
            </div>
        </section>
    )
}

export default Projects