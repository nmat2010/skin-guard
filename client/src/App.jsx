import { useState } from 'react'
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Scan from './pages/Scan';
import Chatbot from './pages/Chatbot';
import Login from './pages/Login';
import About from './pages/About';
import Help from './pages/Help';
import Signup from './pages/Signup';

const App = () => {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/scan' element={<Scan/>}/>
        <Route path='/ai-doctor' element={<Chatbot/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </>
  );
};

export default App
