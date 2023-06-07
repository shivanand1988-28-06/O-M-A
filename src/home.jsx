import React from "react" ;
import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Globe from "./assets/world_-_1992 (Original).mp4" ;
import Logo from "./assets/OMA-Feature.png" ;
import Web from "./assets/pngtree-blue-technology-web-banner-image_122453.jpg" ;
import AboutUs from './about-us';
import Signup from "./signup";
import "./home.css" ;

function Home() {
  

  return (
    <>
   
   <div className = "home">
    <div className = "hero">
   
     <video className = "hero-video" src = {Globe}  width="100%" height="200" loop muted autoPlay plays-inline controls > 
   
     </video>  
     
     <nav>
      <img src = {Logo}  className = "hero-logo" />
      <div className='anchors'>
      <ul>
        <li><a>HOME</a></li>
        <li><a href="/signup">SIGN-UP</a></li>
        <li><a href= "/about-us">ABOUT US</a></li>
      </ul>
      </div>
     </nav>
     <div className='content'>
          <h1>
           One More APP
          </h1>
          <a>Explore</a>

     </div>

    </div>

    <div className = "middle">
        
    
   <div> <h5 className="mb-2 text-6xl font-bold tracking-tight text-gray-600 dark:text-white">Our Tech experts Make Your App With The Most Suitable Technology .</h5><br></br>
   <button className = "middle-button-four">Create - Account</button></div>
        
   <div> <button className = "middle-button-three" ></button></div>
         
        
    </div>

    <div className = "middle-second">
   <div> <button className = "middle-button" ></button></div>
   <div> <h5 className="mb-2 text-6xl font-bold tracking-tight text-gray-900 dark:text-white"> The Most Convenient Way To Bring Your Products Online .</h5><br></br>
   <button className = "middle-buttontwo">Contact Us On Wats-App</button></div>
   </div>

   <div className = "middle-third">
        
    
   <div> <h5 className="mb-2 text-6xl font-bold tracking-tight text-gray-600 dark:text-white"> OMA Let's Bring Your Products Onlone  .</h5><br></br>
   <button className = "middle-button-six">Create - Account</button></div>
        
   <div> <button className = "middle-button-five" ></button></div>
         
        
    </div>

    
</div>
<div className = "footer">
<div><h4 className = "footer-omc">One More App</h4><br></br>
<h3 className = "footer-slog">Sell Your Product Online</h3></div>

<div className = "footer-alllinks"><h3 className = "footer-links">Quick Links</h3><br></br>
<div><a href= "">App developement In Mumbai</a></div><div><a href = "">Blog</a></div><div> <a href= "">About Us</a></div>
</div>
</div>
    
    </>
     
  )
}

export default Home ;
