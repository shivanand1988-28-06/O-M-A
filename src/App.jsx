import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Globe from "./assets/world_-_1992 (Original).mp4" ;
import Logo from "./assets/OMA-Feature.png" ;
import Web from "./assets/pngtree-blue-technology-web-banner-image_122453.jpg" ;
import AboutUs from './about-us';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './home';

import SignupForm from './signup';

function App() {
  

  return (
    <>
   <BrowserRouter>
   <Routes>
   <Route path = "/about-us" element = {<AboutUs/>} />
      <Route path = "/" element = {<Home/>} />
      <Route path = "/signup" element = {<SignupForm />}/>
   </Routes>
   </BrowserRouter>
       </>
     
  )
}

export default App
