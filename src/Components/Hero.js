import React from "react";
import photo from '../assets/images/photo.jpeg';
import './Hero.css'


function Hero() {
    return( 
        
        <div className="hero">
            <div className="name-photo">
            <img src={photo} alt="profile" />
            </div>
            <h3>Always Improve yourself </h3>
        </div>
            
    )
}

export default Hero;