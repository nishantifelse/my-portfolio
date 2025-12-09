import React from 'react'
import CountUp from 'react-countup'

const Overview = () => {
  
  return (
    <section className='my-4' id='overview-sec'>
      <div className="overview-border border rounded-3 container">
        <div className='overview container d-flex p-md-5 justify-content-between align-items-center'>
          <div className='text-md-center'>
            <h1>1+</h1>
            <p>Year of Experience</p>
          </div>
          <div className='text-md-center'>
            
            <h1>
              <CountUp start={0} end={15} duration={2.5} delay={0}/>
              
              +</h1>
            <p>Project Completed</p>
          </div>
          <div className='text-md-center'>
            <h1>
              <CountUp start={0} end={10} duration={2.5} delay={0}/>
              
              +</h1>
            <p>Skills</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview
