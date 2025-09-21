import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero">
        <img src="" alt="" />
        <h1>Hi, I'm <span>Kabir Singh Sidhu</span></h1>
        <p>I am a 3rd year Computer Science student at Simon Fraser University</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">Resume</div>
        </div>
    </div>
  )
}

export default Hero