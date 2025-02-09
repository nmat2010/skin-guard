import React from 'react'
import './style/profile.css'
import axios from 'axios'
import { useContext } from 'react'
import { useState } from 'react'
import { AppContent } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
const Profile = () => {
  const navigate = useNavigate()
  const {userData, backendUrl, setUserData, setIsLoggedin} = useContext(AppContent)
  const [state, setState] = useState('default-view')
  
  const logout = async () => {
    try {
      axios.defaults.withCredentials = true
      const {data} = await axios.post(backendUrl + '/api/auth/logout')
      data.success && setIsLoggedin(false)
      data.success && setUserData(false)
      navigate('/')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='profile-container'>
      <aside className='sidebar'> 
        <div className='profile-info'>
          <div>
            {userData ? (
                  <div className='profile-img'>
                    <Link to="/profile">
                      {userData.name[0].toUpperCase()}
                    </Link>
                  </div>
            ) : (<div className="profile-img">?</div>)
            }
          </div>
          <div className='profile-info-text'>
            <h2 className='profile-username'><b>{userData?.name || 'User'}</b></h2>
            {console.log('name',userData?.name)}
            {console.log('email',userData?.email)}
          </div>
        </div>
        <nav className='menu'>
          <button onClick = {() => setState('acc-info')} className='menu-btn'>Account information</button>
          <button onClick = {() => setState('health-rec')} className='menu-btn'>Health records</button>
          <button onClick = {() => setState('privacy-settings')} className='menu-btn'>Privacy settings</button>
        </nav>
      </aside>
      <div className='profile-content'>
          {state === 'default-view' && (
            <div>
              <img src='/doggo.jpg' alt='doggo' className='img'></img>
              <img width="220" height="200" src='/logo-gif.gif'></img>
              {/* <img src='/logo-border.png' alt='doggo' className='img'></img>
              <img src='/logo-noborder.png' alt='doggo' className='img'></img> */}
            </div>
          )}
          {state === 'acc-info' && (
            <div>
              <div className='acc-info-box'>
                <label className='acc-info-label'>Name:</label>
                <p className='acc-info-field'>{userData?.name || 'Username'}</p>
              </div>
              <div className='acc-info-box'>
                <label className='acc-info-label'>Email:</label>
                <p className='acc-info-field'>{userData?.email || 'user@gmail.com'}</p>
              </div>
              <br></br>
              <button onClick={logout} className='logout-btn'>Log Out</button>
            </div>
          )}
          {state === 'health-rec' && (
             <p className='acc-info-field'>{userData.name}</p>
          )}
          {state === 'privacy-settings' && (
             <div>
             <div className='acc-info-box'>
              <label className='acc-info-label'>Privacy setting 1</label>
             </div>
             <div className='acc-info-box'>
              <label className='acc-info-label'>Privacy setting 2</label>
             </div>
             <br></br>
             <button className='logout-btn'>Change Settings</button>
             <br></br>
             <button className='logout-btn'>Delete Account</button>
           </div>
          )}
      </div>
    </div>
  )
}
export default Profile
