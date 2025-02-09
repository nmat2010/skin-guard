import React from 'react'
import './style/about.css'

const About = () => {
  return (
    <div className='about-container'>
      <div className='product-title'>
        <p1 className='about-us'>About Us</p1>
        <p1 className='about-product-name'>AI Dermatologist</p1>
      </div>
      <div className='product-description'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet esse possimus distinctio, quibusdam, recusandae a ad consequuntur accusantium, cum expedita itaque animi fugiat earum nesciunt dolorem aliquid sit modi ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quo quae consequatur rerum nisi velit doloremque sequi necessitatibus. Deleniti mollitia dicta autem ut vel nam quod sed numquam quisquam eum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae voluptas nam excepturi, corporis ratione nemo dignissimos illo! Eaque, quos a. Dolor aut vel quas ab labore quam, odio blanditiis sit.</p>
      </div>
      <div className='tech-stack'>
        <p className='tech-stack-title'>Tech Stack</p>
        <div className='tech-stack-icon-container'>
          <a href="https://www.mongodb.com/" target="_blank">
            <img src='/mongodb.svg' className='tech-stack-icon'/>
          </a>
          <a href="https://expressjs.com/" target='_blank'>
            <img src='/express.svg'className='tech-stack-icon'/>
          </a>
          <a href="https://nodejs.org/en" target="_blank">
            <img src='/node.svg' className='tech-stack-icon'/>
          </a>
          <a href="https://react.dev/" target='_blank'>
            <img src='/react.svg' className='tech-stack-icon'/>
          </a>
        </div>
      </div>
      <div className='team-description'>
        <p className='team-title'>Our Team</p>
        <div className='team-members'>
          <a href="" target="_blank">
            <p className='team-member'>Ethan Do</p>
          </a>
          <a href="" target="_blank">
            <p className='team-member'>Tuan Tran</p>
          </a>
          <a href="https://www.linkedin.com/in/thu-nguyen-tech/" target="_blank">
            <p className='team-member'>Thu Nguyen</p>
          </a>
          <a href="" target="_blank">
           <p className='team-member'>Han Le</p>
          </a>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, temporibus! Quasi, delectus quae? Aliquid alias repudiandae nostrum ex velit! Fugit laboriosam provident reiciendis optio. Adipisci sint explicabo molestias vero libero!</p>
      </div>
    </div>
  )
}

export default About
