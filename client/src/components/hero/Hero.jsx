import {Link} from 'react-router-dom'
import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
         <div className='hero-image'>
            <div className='product'>
                <p className='product-name'>AI DERMATOLOGIST</p>
            </div>
        </div>
        <div className='content'>
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit asperiores quod ullam possimus magni earum aspernatur illo voluptates pariatur quas corporis illum obcaecati quo facilis, natus autem omnis qui nemo?</p>
                <div className='try'>
                    <Link to="/login"><button>Try it now</button></Link>
                </div>
        </div> 
    </div>
  )
}

export default Hero
