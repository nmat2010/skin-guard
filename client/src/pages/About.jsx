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
        <h1 className='product-heading'>Inspiration</h1>
        <p>Many people struggle with receiving timely dermatological care due to barriers such as high medical costs, limited availability of professionals, and time constraints. Skin-related conditions, if left untreated, can worsen over time, leading to severe complications. Inspired by this gap in accessibility, we set out to build an AI-powered solution that provides users with an instant and preliminary skin condition assessment using computer vision. Our goal is to empower individuals to take control of their skin health while making dermatological advice more accessible and efficient.</p>
      </div>
      <div className='product-description'>
        <h1 className='product-heading'>What it does</h1>
        <p><b>SkinGuard</b> is an AI-driven dermatologist assistant designed to help users analyze their skin conditions instantly. The platform allows users to upload pictures of their skin, which our AI model processes to predict possible conditions. Additionally, an AI-powered chatbot is available to provide explanations, suggest solutions, and answer related queries. To encourage continuous monitoring, <b>SkinGuard</b> also includes a skin tracker feature, allowing users to log and track changes over time for better long-term assessment and treatment.</p>
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
          <a href="https://www.linkedin.com/in/ethan-do-ab053b272/" target="_blank">
            <p className='team-member'>Tri Do</p>
          </a>
          <a href="https://www.linkedin.com/in/tuan-tran-26a341322/?trk=contact-info" target="_blank">
            <p className='team-member'>Tuan Tran</p>
          </a>
          <a href="https://www.linkedin.com/in/thu-nguyen-tech/" target="_blank">
            <p className='team-member'>Thu Nguyen</p>
          </a>
          <a href='https://www.linkedin.com/in/hanhnle/' target='_blank'>
           <p className='team-member'>Han Le</p>
          </a>
        </div>
        <p color='#486874'><b>"What's a Seawolf?" - "I'm a Seawolf!"</b></p>
      </div>
    </div>
  )
}

export default About
