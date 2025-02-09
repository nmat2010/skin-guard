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
            Users have the ability to upload pictures of their skin directly from their devices or take real-time photos using the built-in camera feature. 
            <br></br>
            <br></br>
            Once the image is uploaded, the scanner will process and thoroughly analyze the uploaded photos, using advanced algorithms to assess the condition of the skin and generate a detailed evaluation.
            <br></br>
            <br></br>
            If the initial results are not comprehensive or if users want to improve the accuracy of the assessment, they can upload additional images, allowing the system to refine and enhance the analysis based on the new input provided. 
            <br></br>
            <br></br>
            This process ensures a more precise and personalized evaluation of the skin condition.
            </div>
          </div>
        </div>
        <div className='help-chatbot help-box'>
            <div className='help-inner'>
              <div className='help-inner-right'>
                <p>The system provides a preliminary assessment of the user’s skin condition by analyzing the uploaded images. 
                <br></br>
                <br></br>
                Using advanced image processing and machine learning techniques, it generates an initial evaluation that highlights potential skin issues or conditions. 
                <br></br>
                <br></br>
                In addition to the assessment, users can ask questions at any time to receive AI-driven insights and explanations, which are tailored to their unique skin situation. 
                <br></br>
                <br></br>
                The platform also offers personalized suggestions for skin care routines, preventative measures, and basic treatment options to help users manage and improve their skin health based on the analysis and insights gathered from the images. 
                <br></br>
                <br></br>
                This ensures that users not only understand their condition but also have actionable steps to address it effectively.</p>
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
