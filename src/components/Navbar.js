import React, { useState } from 'react'
import pdf from '../NT-MERN-CV.pdf'
import StarryBackground from './StarryBackground'

const Navbar = () => {
  const [mode, setMode] = useState('light')
  const onClick = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.color = 'white';
      document.body.style.cursor = 'pointer'
    } else {
      setMode('light')
      document.body.style.color = 'black'
    }
  }
  return (
    <>
      {mode === 'dark' && <StarryBackground />}
      <div className="nav d-flex position-fixed justify-content-between mx-md-5 align-items-center py-md-3 end-0 start-0 top-0">
        <div className='left'><h1 className='nav-name'>NT</h1></div>
        <div className={`mid d-flex justify-content-evenly border rounded-3 py-md-2 align-items-center`}>
          <h6 style={{ cursor: 'pointer' }}><a href="#home" style={{ textDecoration: 'none', color: mode === 'light' ? 'black' : 'white' }}><strong>Home</strong></a></h6>
          <h6 style={{ cursor: 'pointer' }}><a href="#overview-sec" style={{ textDecoration: 'none', color: mode === 'light' ? 'black' : 'white' }}><strong>About</strong></a></h6>
          <h6 style={{ cursor: 'pointer' }}><a href="#projects-sec" style={{ textDecoration: 'none', color: mode === 'light' ? 'black' : 'white' }}><strong>Work</strong></a></h6>
          <h6 style={{ cursor: 'pointer' }}> <a href="#contact-src" style={{ textDecoration: 'none', color: mode === 'light' ? 'black' : 'white' }}> <strong>Contact</strong></a></h6>
          <h6 style={{ cursor: 'pointer' }}> <a href={pdf} style={{ textDecoration: 'none', color: mode === 'light' ? 'black' : 'white' }}><i class="ri-file-pdf-2-fill"></i></a></h6>
        </div>
        <div className='right d-flex justify-content-between gap-2 mx-4'>
          <div className='border rounded-5'><a href="https://github.com/nishantifelse" style={{ textDecoration: 'none', color: mode === 'light' ? 'black' : 'white' }}><i className="ri-github-fill"></i></a></div>
          <div className='border rounded-5'><a href="https://www.linkedin.com/in/nishant-tiwari-a47457331/" style={{ textDecoration: 'none', color: mode === 'light' ? 'black' : 'white' }}><i className="ri-linkedin-box-fill"></i></a></div>
          <div className='border rounded-5'><a href="https://www.instagram.com/nexus.ofnerds/" style={{ textDecoration: 'none', color: mode === 'light' ? 'black' : 'white' }}><i className="ri-instagram-fill"></i></a></div>
          <div className='border rounded-5' onClick={onClick}>{mode === 'light' ? <i class="ri-sun-fill"></i> : <i class="ri-moon-cloudy-fill"></i>}</div>
        </div>
      </div>
    </>
  )
}

export default Navbar
