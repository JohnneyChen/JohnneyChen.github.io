import React, { useState } from 'react'
import './projects.css'

const projects = [
  {
    title: "Crypto Fund",
    description: "Next.js application with blockchain backend",
    stack: ["JavaScript", "NextJS", "Solidity", "web3"],
    code: "https://github.com/JohnneyChen/CryptoFund",
    deploymentStatus: false
  },
  {
    title: "Tikket",
    description: "Microservice application with Node.js backend and Mongo database",
    stack: ["TypeScript", "Microservice", "NextJS", "Node.js", "Redis", "MongoDB"],
    code: "https://github.com/JohnneyChen/ticketing",
    deploymentStatus: false
  },
  {
    title: "Placement AI",
    description: "Machine learning application that recommends optimal degree for students",
    stack: ["Django", "SQL"],
    code: "ACCESS_DENIED",
    deploymentStatus: false
  },
  {
    title: "Yelp Camp",
    description: "Node.js monolith",
    stack: ["JavaScript", "Node.js", "MongoDB"],
    code: "https://github.com/JohnneyChen/YelpCamp",
    deploymentStatus: false
  },
]

const ProjectDisplay = ({ project, current, index }) => {
  const getClass = () => {
    const diff = current - index

    if (diff === 1) return 'projects__project-container projects__project-container--left'
    if (diff === -1) return 'projects__project-container projects__project-container--right'
    return 'projects__project-container'
  }

  return (
    <div className={getClass()}
      style={{ display: Math.abs(current - index) <= 1 ? undefined : "none"}} 
      data-augmented-ui="tl-clip t-scoop-x tr-2-clip-y br-2-clip-x b-rect-x bl-clip both">
      <div className='projects__project-wrapper'>
        <div className='projects__project-label'>
          {project.title}
        </div>
        <div className='projects__project-status'>
          <div className='projects__project-status-led'/>
          Offline
        </div>
        <div className='projects__project-description'>
          {project.description}
        </div>
        <div className='projects__project-stack-section'>
          <div className='projects__project-stack-label'>
            Technologies
          </div>
          <div className='projects__project-stack-list'>
            {
              project.stack.map(technology => {
                return (
                  <div key={`stack-display-${project.title}-${technology}`}
                    className='projects__project-stack-display' 
                    data-augmented-ui="tl-clip br-2-clip-x border">
                    {technology}
                  </div>
                )
              })
            }
          </div>
        </div>
        {
          project.code === "ACCESS_DENIED" ? 
          <a className='projects__project-code'
            data-augmented-ui="tl-clip tr-clip br-clip-x bl-clip border">
            <div className='glitch' title="[ACCESS ERROR]">
              [ACCESS ERROR]
            </div>
          </a> :
            <a href={project.code} 
            target="_blank"
            className='projects__project-code'
            data-augmented-ui="tl-clip tr-clip br-clip-x bl-clip border">
            <div className='glitch' title="Inspect source code">
              Inspect source code
            </div>
          </a>
        }
      </div>
    </div>
  )
}

const Projects = () => {
  const [current, setCurrent] = useState(0)

  return (
    <div className='projects__container'>
      <div className='projects__carousel'>
        {
          projects.map((project, idx) => {
            return (
              <ProjectDisplay key={`project-display-${project.title}`}
                project={project}
                index={idx}
                current={current}/>
            )
          })
        }
      </div>
      <div className='projects__carousel-control'>
        <div className={`project__carousel-button ${current === 0 ? "project__carousel-button--disabled" : ""}`} 
          style={{ transform: "rotateY(180deg)", marginRight: "10vh"}}
          onClick={() => {
            setCurrent(prev => {
              if (prev === 0) return prev
              return prev - 1
            })
          }}>
          ᑀ
        </div>
        <div
          className={`project__carousel-button ${current === projects.length - 1 ? "project__carousel-button--disabled" : ""}`} 
          onClick={() => {
            setCurrent(prev => {
              if (prev === projects.length - 1) return prev
              return prev + 1
            })
          }}>
          ᑀ
        </div>
      </div>
    </div>
  )
}

export default Projects