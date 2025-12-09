import React from 'react'

const Contact = () => {
  return (
    <section id='contact-src'>
      <div className='container border rounded p-5'>
        <h4 className='text-center'>Let's Get Connected</h4>
        <p className='text-center'>Your connections is your power</p>
      <div className='contact-form container w-100' style={{marginTop: '50px'}}>
        <div className='w-100 p-1'>
          <input className='sminput name rounded-4 p-2 mx-2' type="text" placeholder='Your First Name'/>
          <input className='sminput title rounded-4 p-2 mx-2' type="text" placeholder='Your Last Name'/>
        </div>
        <div className='w-100 p-1'>
          <input className='sminput contact rounded-4 p-2 mx-2' type="text" placeholder='Your Contact'/>
          <input className='sminput email rounded-4 p-2 mx-2' type="email" placeholder='Your E-mail'/>
        </div>
        <div className='w-100 p-2'>
          <textarea className='w-100 rounded-5 p-2' name="desciption" id="desc" placeholder='write something'></textarea>
        </div>
      </div>

      <div className='d-flex justify-content-center' style={{marginTop: '25px'}}>
        <button className='btn btn-dark bg-gradient w-25 rounded-5'><i className="ri-send-plane-fill m-0" style={{fontSize: '20px'}}></i></button>
      </div>
      </div>
    </section>
  )
}

export default Contact
