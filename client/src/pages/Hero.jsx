import {Link} from 'react-router-dom'
import React from 'react'
import './style/hero.css'
import { useContext } from 'react'
import { AppContent } from '../context/AppContext'

const Hero = () => {

  const {userData} = useContext(AppContent)

  return (
    <div className='hero'>
         <div className='hero-image'>
            {userData ? (
              <div className='product'>
                <p className='product-name'>Welcome, {userData.name}</p>
              </div>
            ): (
              <div className='product'>
                <p className='product-name'>AI DERMATOLOGIST</p>
              </div>
            )}
        </div>
        <div className='content'>
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit asperiores quod ullam possimus magni earum aspernatur illo voluptates pariatur quas corporis illum obcaecati quo facilis, natus autem omnis qui nemo?</p>
                {userData ? (
                  <div className='try'>
                    <Link to="/scan"><button>Scan Now</button></Link>
                  </div>
                ):(
                  <div className='try'>
                    <Link to="/login"><button>Try it now</button></Link>
                  </div>
                )}
        </div> 
    </div>
  )
}

export default Hero
