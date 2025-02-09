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
            <div className='gif'>
             <img src='/Untitled_Artwork.gif' width="300px" height="300px"></img>
            </div>
        </div>
        <div className='content'>
                <p className='description'><b>SkinGuard – The Care Your Skin Deserves</b>, an AI-powered platform that provides instant skin condition assessment and treatment guidance using advanced computer vision technology.</p>
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
