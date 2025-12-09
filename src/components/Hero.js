import React from 'react'
import nisImg from '../nishant.jpeg'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  return (
    <section id='home'>
      <div className="hero-border border rounded-3 container">
        <div className='hero container py-3'>
          <div className='hero-left'>
            <div className='d-flex justify-content-center my-1'>
              <img className='w-75' src={nisImg} alt="" />
            </div>
          </div>
          <div className='hero-right w-75'>
            <h1 style={{fontFamily: 'Syne, "Syne Fallback"'}}>NISHANT TIWARI</h1>
            <ReactTyped className='h4' style={{fontFamily: 'Syne, "Syne Fallback"'}} strings={['I am a MERN Stack Developer', 'I am from Jharkhand', 'I love Playing Cricket']} typeSpeed={80} backSpeed={60} loop></ReactTyped>

            <p className='my-4' style={{ fontSize: '16px', width: '88%' }}>
              I am a passionate MERN Stack Developer and problem-solver with a strong foundation in data structures, algorithms, and full-stack web development. My expertise spans building responsive, interactive, and server-side rendering web applications, integrating scalable solutions, and leading technical teams toward impactful outcomes.

              <p className='my-2'>
                Beyond development, I am the Founding Leader of an Innovators Hub, fostering collaboration, creativity, and hands-on learning. I actively engage with communities, mentor aspiring developers, and participate in competitions to sharpen problem-solving skills. Proficient in JavaScript, MongoDB, Express.js, ReactJS, NodeJs and RESTful APIs, I thrive in both technical execution and cross-functional leadership, driving projects from ideation to implementation.
              </p>
            </p>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero
