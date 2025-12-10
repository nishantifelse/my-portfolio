import React from 'react'
import inotebook from '../projects/inotebook.mp4'
import femur from '../projects/femur.mp4'
import amzoneclone from '../projects/amazonclone.mp4'
import authsystem from '../projects/auth-system.mov';
import youtubeclone from '../projects/youtubeclone.mp4'

const Projects = () => {
  const projects = [
    {
      img: inotebook,
      headingProject: 'iNotebook: The Notebook on cloud',
      about: "1.⁠⁠Built a responsive and interactive iNoteBook  Created a fully responsive and server-side rendered iNoteBook application using the MERN stack.  2.⁠⁠Implemented secure APIs and authentication  Developed RESTful APIs and added Authentication & Authorization using JWT, OAuth, and salted password hashing.  3.⁠⁠Applied core web development principles  Strengthened fundamentals by using structured layout, clean styling, and interactive UI components.  4.⁠⁠Note management features Users can add, update, edit, and delete their daily notes within the application. ",
      stackUsed: 'Stack Used: Frontend: React.js; Backend: Node.js, Express.js; Database: MongoDB; Auth: JWT, OAuth, Salted Hashing',
      gitUrl: 'https://github.com/nishantifelse/inotebook',

    },
    {
      img: femur,
      headingProject: 'Femur: Web and Design agency',
      about: '1.⁠⁠Built for a website agency Developed a web application specifically designed to support a website agency and its services.2.⁠⁠Customer interaction features  Users can consult with the team, book services, and subscribe to newsletters for regular updates.  3.⁠⁠Smooth animations with GSAP  Integrated GSAP to create interactive and smooth animations across the website.  4.⁠⁠Secure payments with Razorpay  Implemented Razorpay API for a safe and reliable payment gateway experience.',
      stackUsed: 'Stack Used: Frontend: React.js / HTML / CSS / JavaScript;  Animations: GSAP  Payment: Razorpay API; Backend (if applicable): Node.js, Express.js',
      gitUrl: 'https://github.com/nishantifelse/gsap-pro',
    },
    {
      img: authsystem,
      headingProject: 'Authorization and Authentication System',
      about: '1.⁠⁠Built using MERN with secure authentication Developed the web application using the MERN stack and implemented authentication using JWT and salted password hashing for strong security. 2.⁠⁠User account features Users can sign up, log in, and create their accounts smoothly with proper backend validation and secure data handling.3.⁠⁠High-level password security Passwords are stored in hashed + salted form, so even the admin cannot view or retrieve the actual user passwords.',
      stackUsed: 'Stack Used: Frontend: React.js  Backend: Node.js, Express.js  Database: MongoDB. Authentication: JWT, Password Hashing + Salt',
      gitUrl: 'https://github.com/nishantifelse/auth-system-sida',
    },
    {
      img: amzoneclone,
      headingProject: 'Amazone Clone',
      about: '1.⁠⁠Built a responsive Amazon clone Developed a fully responsive and interactive Amazon clone using HTML, CSS, and JavaScript. 2.⁠Managed product and order data Stored all product details in JSON format and used the POST method to send order data securely. 3.⁠⁠Applied core web design principles Strengthened fundamentals through structured layout, clean styling, and interactive UI behavior. 4.⁠⁠Improved frontend development skills Completed JavaScript practice and revised HTML/CSS basics, boosting overall frontend proficiency.',
      stackUsed: 'Stack Used: Frontend: HTML, CSS, JavaScript; Data Handling: JSON ;Methods: POST for order submission',
      gitUrl: 'https://github.com/nishantifelse/nishantifelse-amazon-clone',
    },
    {
      img: youtubeclone,
      headingProject: 'Youtube clone',
      about: ' Detailed Points 1.Built a responsive YouTube clone Developed a fully responsive and interactive YouTube-style video platform using HTML, CSS, and JavaScript. 2.Dynamic video data handling Stored all video details (title, thumbnail, channel info) in JSON format and dynamically displayed them on the UI. 3.Implemented search and filtering Added a functional search bar that filters videos based on keywords, enhancing user experience. 4.Strengthened frontend fundamentals Revised core concepts of HTML, CSS, and JavaScript, improving skills in layout design, styling, and interactivity.',
      stackUsed: 'Stack Used Frontend: HTML, CSS, JavaScript; Data Handling: JSON; Features: Search, filtering, dynamic rendering',
      gitUrl: '',
    }
  ]
  return (
    <section className='my-5' id='projects-sec'>
      <div className="projects-border border rounded-3 container">

        <div className='projects container p-md-5'>
          <h3>WORKS</h3>
          <p>I have made some project to show case my work:</p>
          <div className='pro-grid p-4'>
            {projects.map((project) => {
              return <div className='pro-content border rounded-4'>

                <div className='pro-img d-flex justify-content-center p-4 '>
                  <video className='pro-vid rounded-4' src={project.img} controls></video>
                </div>

                <div className='pro-about text-justify p-4 w-50'>
                  <p><strong className='h4'>{project.headingProject}</strong><br /><span style={{ fontSize: '12.5px', lineHeight: '1' }}>{project.about}<br />{project.stackUsed}</span></p>

                  <div className=''>
                  <button className="btn border border-primary rounded-5"><a href={project.gitUrl}><i className="ri-github-fill"></i></a></button>
                </div>
                </div>
                
              </div>

            })}


          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
