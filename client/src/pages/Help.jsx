import React from 'react'
import './style/help.css'

const Help = () => {
  return (
    <div className='help'>
      <div className='help-upper'>
        <p className='help-title'>Help & Contacts</p>
      </div>
      <div className='help-lower'>
        <p className='help-guide'>How To Use</p>
        <div className='help-scan help-box'>
          <div className='help-inner'>
            <div className='help-inner-left'>
              <p className='help-subtitle'>Scanner Screen</p>
              <img src="/help-scan.png" className='help-img scan-img'/>
            </div>
            <div className='help-inner-right'>
              <p>Users can upload pictures of their skin or take photos using the camera feature.<br></br><br></br>The scanner will process and analyze the uploaded images to prepare a skin condition assessment.<br></br><br></br>Users can upload additional images to refine the analysis.</p>
            </div>
          </div>
        </div>
        <div className='help-chatbot help-box'>
            <div className='help-inner'>
              <div className='help-inner-right'>
                <p>Provides a preliminary assessment of the user's skin condition based on the uploaded images.<br></br><br></br>Users can ask questions to receive AI-driven insights and explanations.<br></br><br></br>Offers suggestions for skin care, prevention, and basic treatment options.</p>
              </div>
              <div className='help-inner-left'>
                <p className='help-subtitle ai-subtitle'>AI Doctor</p>
                <img src="/help-AI.png" className='help-img ai-img'/>
              </div>
            </div>
        </div>
        <div className='contact'>
          <div className='help-left'>
            <img src='/contact-img.png' className='contact-img'/>
          </div>
          <div className='help-right'>
            <p className='contact-title'>Contacts</p>
            <p className='contact-text'><b>Contact 1:</b> (123) 456-789 | <b>Address:</b> 6 MetroTech Center</p>
            <p className='contact-text'><b>Contact 2:</b> (123) 456-789 | <b>Address:</b> 6 MetroTech Center</p>
            <p className='contact-text'><b>Contact 3:</b> (123) 456-789 | <b>Address:</b> 6 MetroTech Center</p>
            <p className='contact-text'><b>Contact 4:</b> (123) 456-789 | <b>Address:</b> 6 MetroTech Center</p>
            <p className='contact-text'><b>Contact 5:</b> (123) 456-789 | <b>Address:</b> 6 MetroTech Center</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help
