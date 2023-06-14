import React, { useEffect, useState } from 'react'
import "./skills.css"

const skills = [
  {
    title: "Javascript",
    value: 14
  },
  {
    title: "Backend",
    value: 13
  },
  {
    title: "Algorithms",
    value: 13
  },
  {
    title: "Blockchain",
    value: 10
  },
  {
    title: "C++/C",
    value: 10
  },
  {
    title: "Database",
    value: 8
  },
]

const StatisticBlock = ({ title, value }) => {
  const [chargedValue, setChargedValue] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setChargedValue(prev => {
        if (prev.length >= value) {
          clearInterval(timer)
          return prev
        }
        return [...prev, 1]
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='skills__statistics-warper'>
      <div className='skills__statistics-section'>
        <div className='skills__statistics-label' data-augmented-ui="tl-clip br-clip border">
          {title}
        </div>
        <div className='skills__statistics-display'>
          {
            chargedValue.map((val, idx) => {
              return (
                <div key={`skills__statistics-block-${title}-${idx}`} 
                  className='skills__statistics-block'/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <div className='skills__container'>
      <div className='skills__synposis-container'
        data-augmented-ui="tl-clip tr-clip br-clip bl-clip border">
        <div className='skills__synopsis-title'>
          Synopsis
        </div>
        <div className='skills__synposis-section'>
          <div className='skills__synposis-title'>
            Experience
          </div>
          <div className='skills__synposis-content'>
            Subject has completed multiple professional software positions through the University of Waterloo Co-op program.
          </div>
        </div>

        <div className='skills__synposis-section'>
          <div className='skills__synposis-title'>
            Strengths
          </div>
          <div className='skills__synposis-content'>
            Subject is adept at algorithms, software development, and learning new technologies with rapid throughput.
          </div>
        </div>

        <div className='skills__synposis-section'>
          <div className='skills__synposis-title'>
            Weaknesses
          </div>
          <div className='skills__synposis-content'>
            Subject has known weaknesses to light mode, [REDACTED], [REDACTED].
          </div>
        </div>
      </div>

      <div className='skills__statistics-container' 
        data-augmented-ui="tl-clip tr-clip br-clip bl-2-clip-x border">
        <div className='skills__statistics-title'>
          Abilities
        </div>
        {
          skills.map(({title, value}) => {
            return <StatisticBlock key={`statistic-block-${title}`} title={title} value={value}/>
          })
        }
      </div>
    </div>
  )
}

export default Skills