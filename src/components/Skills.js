import React, { useEffect, useState, useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const refA = useRef(null)
  const refB = useRef(null)
  const [skill, setSkill] = useState('stack');
  const [textColor, setTextColor] = useState('black');
  const [stacks, setStacks] = useState([
    'MongoDB', 'JavaScript (ES6+)', 'Express.js', 'React.js', 'Node.js','RESTful API','GSAP','Vercel', 'Netifly', 'Bootstrap', 'TailwindCSS', 'Git/GitHub'
  ])

  const [expertise, setExpertise] = useState([
    'MERN Web Development','Deployment','Alogorithm Design','Software Devlopment'
  ])
  const [software, setSoftware] = useState([
    'VS Code','Arduino IDE','Git/GitHub','ChatGPT','Canva','Excel','Words','Vercel','Netifly'
  ])

  

  useEffect(() => {
    if (skill === 'expertise') {
      ref.current.style.display = '';
      refA.current.style.display = 'none'
      refB.current.style.display = 'none'
    } else if (skill === 'software') {
      ref.current.style.display = 'none'
      refA.current.style.display = ''
      refB.current.style.display = 'none'
    } else {
      ref.current.style.display = 'none'
      refA.current.style.display = 'none'
      refB.current.style.display = ''
    }

  }, [skill])

  


  return (
    <section className='my-5' id='skills-sec'>
      <div className="skills-border border rounded-3 container">
        <div className='skills container p-md-5'>
          <h3>SKILLS</h3>
          <div className='my-4'>
            <button className='btn' onClick={() => { setSkill('stack') }} style={{ borderTop: skill === 'stack' ? 'solid' : '' , fontWeight: skill === 'stack' ? 'bold' : '', color: textColor}}>Tech Stacks</button>
            <button className='btn mx-5' onClick={() => { setSkill('expertise') }} style={{ borderTop: skill === 'expertise' ? 'solid' : '' , fontWeight: skill === 'expertise' ? 'bold' : '' }}>Expertise</button>
            <button className='btn' onClick={() => { setSkill('software') }} style={{ borderTop: skill === 'software' ? 'solid' : '' , fontWeight: skill === 'software' ? 'bold' : '' }}>Software</button>
            <div className='w-100 border-bottom'></div>
          </div>
          <div>
            <div className="exp-grid text-start" ref={ref}>
              {expertise.map((expertiseEach) => {
                return <div className='col border rounded'>
                  <p className='m-0' style={{fontSize: '14px'}}>{expertiseEach}</p>
                </div>
              })}

            </div>
            <div className="exp-grid text-start" ref={refA}>
              {software.map((softwareEach) => {
                return <div className='col border rounded'>
                  <p className='m-0' style={{fontSize: '14px'}}>{softwareEach}</p>
                </div>
              })}
            </div>
            <div className="exp-grid text-start" ref={refB}>
              {stacks.map((stack) => {
                return <div className='col border rounded'>
                  <p className='m-0' style={{fontSize: '14px'}}>{stack}</p>
                </div>
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
