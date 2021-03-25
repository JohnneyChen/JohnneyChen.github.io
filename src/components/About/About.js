import React from 'react'

import StackDisplay from './StackDisplay'

import nodeIcon from '../../images/node.png'
import mongodbIcon from '../../images/mongodb.png'
import mysqlIcon from '../../images/mysql.png'
import expressIcon from '../../images/express.png'
import reactIcon from '../../images/react.png'
import dockerIcon from '../../images/docker.png'
import pythonIcon from '../../images/python.png'
import djangoIcon from '../../images/django.png'
import kubernetesIcon from '../../images/kubernetes.png'



const About = () => {
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className="left-text-content">
                            <div className="section-heading">
                                <h6>About Me</h6>
                                <h2 className="mb-2">I'm a Computer Engineering student passionate about web design</h2>
                                <p></p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className="right-text-content">
                            <h4>My prefered stack</h4>
                            <div className="row">
                                <StackDisplay aos="fade-left" imgLink={mongodbIcon} title="MongoDB" />
                                <StackDisplay aos="fade-left" imgLink={expressIcon} title="Express" />
                                <StackDisplay aos="fade-left" imgLink={reactIcon} title="React" />
                                <StackDisplay aos="fade-left" imgLink={nodeIcon} title="Node.js" />
                                <StackDisplay aos="fade-left" imgLink={mysqlIcon} title="MySQL" />

                                <h4>Other familiar technologies</h4>
                                <StackDisplay aos="fade-left" imgLink={pythonIcon} title="Python" />
                                <StackDisplay aos="fade-left" imgLink={djangoIcon} title="Django" />
                                <StackDisplay aos="fade-left" imgLink={dockerIcon} title="Docker" />
                                <StackDisplay aos="fade-left" imgLink={kubernetesIcon} title="Kubernetes" />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About