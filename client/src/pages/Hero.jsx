import {Link} from 'react-router-dom'
import React from 'react'
import './style/hero.css'
import { useContext } from 'react'
import { AppContent } from '../context/AppContext'
import {useState, useEffect} from 'react';

const Hero = () => {

  const {userData} = useContext(AppContent)
  const Typing = ({text, speed = 50}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
      if (index < text.length) {
        const timer = setTimeout(() => {
          setDisplayedText((prev) => prev + text.charAt(index));
          setIndex(index + 1);
        }, speed);
  
        return () => clearTimeout(timer);
      }
    }, [index, text, speed]);
  
    return (
      <div className="product-name">
        {displayedText}
        <span className="animate-blink">|</span>
      </div>
    );
  }


  return (
    <div className='hero'>
         <div className='hero-image'>
            {userData ? (
              <div className='product'>
                <p className='product-name'>Welcome, {userData.name}</p>
              </div>
            ): (
              <div className='product'>
                <Typing text="Hi! Welcome to your SkinGuard" speed={50}/>
              </div>
            )}
            <div className='gif'>
             <img src='/logo-gif.gif' width="300px" height="300px"></img>
            </div>
        </div>
        <div className='content'>
                <p className='description slogan'>SkinGuard – The Care Your Skin Deserves</p>
                <p className='description'>An AI-powered platform that provides instant skin condition assessment and treatment guidance using advanced computer vision technology.</p>
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
