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
              <img src="src/components/assets/help-scan.png" className='help-img scan-img'/>
            </div>
            <div className='help-inner-right'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis porro deleniti. Tempora, tempore labore nulla natus voluptatum laboriosam cumque dignissimos asperiores esse eius ullam officiis ipsa quo quaerat. Rerum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi nobis magni facere at, illum nisi reiciendis recusandae soluta esse maxime, repudiandae sunt doloremque voluptate. Minima nam ut beatae animi consectetur?</p>
            </div>
          </div>
        </div>
        <div className='help-chatbot help-box'>
            <div className='help-inner'>
              <div className='help-inner-right'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis porro deleniti. Tempora, tempore labore nulla natus voluptatum laboriosam cumque dignissimos asperiores esse eius ullam officiis ipsa quo quaerat. Rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis delectus ea maiores, porro non suscipit rem. Quos repellendus enim fugit. Alias maiores adipisci rerum nihil obcaecati eius minus iusto autem.</p>
              </div>
              <div className='help-inner-left'>
                <p className='help-subtitle ai-subtitle'>AI Doctor</p>
                <img src="src/components/assets/help-AI.png" className='help-img ai-img'/>
              </div>
            </div>
        </div>
        <div className='contact'>
          <div className='help-left'>
            <img src='src/components/assets/contact-img.png' className='contact-img'/>
          </div>
          <div className='help-right'>
            <p className='contact-title'>Contacts</p>
            <p className='contact-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci, a rerum magnam error aliquam porro impedit nihil minus unde eius sunt mollitia eligendi deleniti, corrupti et esse recusandae provident? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis earum saepe, ipsam laboriosam aut molestias dolor exercitationem amet numquam commodi tempora dignissimos enim dolorem quidem architecto debitis velit placeat incidunt?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error culpa accusantium quisquam necessitatibus eum repudiandae doloremque, nihil tempore quia exercitationem facere quos, odio maiores eligendi similique, assumenda id! Voluptas, beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequatur nisi architecto deleniti facere tenetur reprehenderit sit eveniet voluptate saepe labore iure perspiciatis expedita fugit necessitatibus, aut facilis aliquid doloribus?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help
