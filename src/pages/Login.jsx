import React from 'react'
import { Link } from 'react-router-dom'
import './style/login.css'
const profile = <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="120" height="120" rx="60" fill="#0B5F80"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M78.0007 48C78.0007 57.9411 69.9419 66 60.0007 66C50.0596 66 42.0007 57.9411 42.0007 48C42.0007 38.0589 50.0596 30 60.0007 30C69.9419 30 78.0007 38.0589 78.0007 48ZM72.0007 48C72.0007 54.6274 66.6282 60 60.0007 60C53.3733 60 48.0007 54.6274 48.0007 48C48.0007 41.3726 53.3733 36 60.0007 36C66.6282 36 72.0007 41.3726 72.0007 48Z" fill="#FCEFCC"/>
<path d="M60.0007 75C40.5776 75 24.0286 86.4852 17.7246 102.576C19.2603 104.101 20.878 105.543 22.5706 106.896C27.2648 92.1231 41.9909 81 60.0007 81C78.0106 81 92.7367 92.1231 97.4309 106.896C99.1235 105.544 100.741 104.101 102.277 102.576C95.973 86.4853 79.4239 75 60.0007 75Z" fill="#FCEFCC"/>
</svg>
const google = <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_12_239)">
<path d="M23.9996 19.6362V28.9308H36.916C36.3488 31.9199 34.6468 34.4509 32.0941 36.1527L39.8831 42.1964C44.4213 38.0074 47.0395 31.8546 47.0395 24.5456C47.0395 22.8438 46.8868 21.2073 46.6031 19.6365L23.9996 19.6362Z" fill="#4285F4"/>
<path d="M10.5494 28.5681L8.79263 29.9129L2.57434 34.7564C6.52342 42.5891 14.6174 48.0001 23.9991 48.0001C30.4789 48.0001 35.9116 45.8619 39.8826 42.1965L32.0936 36.1528C29.9554 37.5928 27.2281 38.4656 23.9991 38.4656C17.7591 38.4656 12.4575 34.2548 10.5592 28.582L10.5494 28.5681Z" fill="#34A853"/>
<path d="M2.57436 13.2437C0.938084 16.4726 0 20.1163 0 23.9999C0 27.8834 0.938084 31.5271 2.57436 34.7561C2.57436 34.7778 10.5599 28.5597 10.5599 28.5597C10.08 27.1197 9.79624 25.5926 9.79624 23.9996C9.79624 22.4067 10.08 20.8795 10.5599 19.4395L2.57436 13.2437Z" fill="#FBBC05"/>
<path d="M23.9996 9.55636C27.5342 9.55636 30.676 10.7781 33.1851 13.1345L40.0577 6.2619C35.8904 2.37833 30.4797 0 23.9996 0C14.6179 0 6.52342 5.38908 2.57434 13.2437L10.5597 19.44C12.4578 13.7672 17.7596 9.55636 23.9996 9.55636Z" fill="#EA4335"/>
</g>
<defs>
<clipPath id="clip0_12_239">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>



const Login = () => {
  return (
    <div className='login'>
        <div className='login-upper-container'>
            <div className='login-container'>
                <div className='login-profile'>
                    {profile}
                    <h2 className='login-title'>Log In</h2>
                </div>
                <div className='login-content'>
                    <label for="email" className='input-label'>Email Address</label>
                    <br></br>
                    <input id="email" type="email" className='input-field' required></input>
                </div>
                <div className='login-content'>
                    <label for="password" className='input-label'>Password</label>
                    <br></br>
                    <input id="password" type="password" className='input-field' required></input>
                </div>
                <div className='login-button'>
                    <button id="login-btn">Log In</button>
                </div>
                <div className="or-divider">
                    <span className="or-text">OR</span>
                </div>
                <div className='google-login'>
                    <button id="googleLogin" className='google-button'>
                        <div className='google-icon'>{google}</div>
                        <br></br>
                        <p>Continue with Google</p>
                    </button>
                </div>
                <Link to='/signup'><p className='signup'>Sign Up</p></Link>
            </div>
        </div>
    </div>
  )
}

export default Login
