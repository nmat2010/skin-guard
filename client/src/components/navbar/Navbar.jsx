import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { AppContent } from '../../context/AppContext'


const profile = <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="50" rx="25" fill="#FCEFCC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.5003 20C32.5003 24.1421 29.1424 27.5 25.0003 27.5C20.8582 27.5 17.5003 24.1421 17.5003 20C17.5003 15.8579 20.8582 12.5 25.0003 12.5C29.1424 12.5 32.5003 15.8579 32.5003 20ZM30.0003 20C30.0003 22.7614 27.7617 25 25.0003 25C22.2389 25 20.0003 22.7614 20.0003 20C20.0003 17.2386 22.2389 15 25.0003 15C27.7617 15 30.0003 17.2386 30.0003 20Z" fill="#0B5F80"/>
<path d="M25.0003 31.25C16.9073 31.25 10.0119 36.0355 7.38525 42.7401C8.02512 43.3754 8.69918 43.9765 9.40441 44.5401C11.3603 38.3846 17.4962 33.75 25.0003 33.75C32.5044 33.75 38.6403 38.3846 40.5962 44.5401C41.3014 43.9765 41.9755 43.3755 42.6154 42.7401C39.9887 36.0355 33.0933 31.25 25.0003 31.25Z" fill="#0B5F80"/>
</svg>
const logo = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="16" fill="#F5F5F5" stroke="#FCEFCC" stroke-width="8"/>
</svg>
const product = "AI Dermatologist"

const Navbar = () => {

  const {userData, backendUrl, setUserData, setIsLoggedin} = useContext(AppContent)

  return (
    <div className='navbar'>
      <Link to="/" className='nav-logo'>
        <img src='/logo-border.png' className='logo-img'></img>
        <p className='logo-name'>SkinGuard - AI Dermatologist</p>
      </Link>
        <div className='nav-menu'>
            <div className='scan'>
              <Link to="/scan"><button>Scan Now</button></Link>
            </div>
            <div>
                <Link to='/about'><p>About Us</p></Link>
            </div>
            <div>
              <Link to='/help'><p>Help & Contact</p></Link>
            </div>
            <div>
              <Link to='/keep-track'><p>Keep Track</p></Link>
            </div>
            {userData ? (
              <div className='profile'>
                <Link to="/profile">
                  {userData.name[0].toUpperCase()}
                </Link>
              </div>
            ) : (
              <div className='login'>
                <Link to="/login"><button>Log In</button></Link>
              </div>
            )}
        </div>
    </div>
  )
}

export default Navbar
