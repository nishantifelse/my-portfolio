import React from 'react'
import nonlogo from '../nonlogo.png'
import femurlogo from '../FEMUR.png'
import genzlogo from '../Z.jpg'
import bluestocklogo from '../bluestock.jpeg'
import inretechLogo from '../inretechlogo.png'

const Company = () => {
  const companies = [
    {
      img: nonlogo,
      companyName: 'Nexus Of Nerds',
      
    },
    {
      img: inretechLogo,
      companyName: 'INREtech Sustain Solution Pvt. Ltd'
      
    },
    {
      img: bluestocklogo,
      companyName: 'BlueStock FinTech Pvt Ltd'
      
    },
    {
      img: femurlogo,
      companyName: 'Femur'
      
    },
    {
      img: genzlogo,
      companyName: 'GenZawaraa'
      
    }
  ]
  return (
    <section className='my-5' id='company-sec'>
      <div className="company-border border rounded-3 container">

        <div className='company container p-md-5'>
          <h3>COMPANY / BRANDS WORKED WITH</h3>
          <p>I had previllage of working with:</p>
          <div className='d-flex py-md-3 justify-content-between align-items-center'>
            {companies.map((company)=>{
              return <div className='com-grid px-4'>
              <div className='d-flex justify-content-center'>
                <img style={{width: '100px', borderRadius: '30%'}} src={company.img} alt="" />
              </div>              
            </div>
            })}
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Company
