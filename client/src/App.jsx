import { useState } from 'react'
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './pages/Hero';
import Scan from './pages/Scan';
import Chatbot from './pages/Chatbot';
import Login from './pages/Login';
import About from './pages/About';
import Help from './pages/Help';
import Profile from './pages/Profile';
import Footer from './components/footer/Footer';
import EmailVerify from './pages/EmailVerify';
import ResetPassword from './pages/ResetPassword';
import { ToastContainer } from 'react-toastify';
import KeepTrack from './pages/KeepTrack';


const App = () => {

  return (
    <>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/scan' element={<Scan/>}/>
        <Route path='/ai-doctor' element={<Chatbot/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/keep-track' element={<KeepTrack/>}/>
        <Route path='/email-verify' element={<EmailVerify/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App
