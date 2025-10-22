import React, { useState } from 'react'
import "./Hero.css"
import githubLogo from "../../assets/github.png";
import instagramLogo from "../../assets/instagram.png";
import linkedinLogo from "../../assets/linkedin.png";
import profileImage from "../../assets/mypic.png"

const Hero = () => {

  const colorPalettes = [
    {
      name: "Original",
      background: "#161513",
      gradientStart: "#DA7C25",
      gradientEnd: "#B923E1",
      textColor: "#ffffff",
      accentColor: "#f0f0f0"
    },
    {
      name: "Ocean Blue",
      background: "#0f1419",
      gradientStart: "#00D4FF",
      gradientEnd: "#0066CC",
      textColor: "#e6f3ff",
      accentColor: "#cce7ff"
    },
    {
      name: "Forest Green",
      background: "#0d1b0d",
      gradientStart: "#32CD32",
      gradientEnd: "#006400",
      textColor: "#e6ffe6",
      accentColor: "#ccffcc"
    },
    {
      name: "Sunset Red",
      background: "#1a0e0e",
      gradientStart: "#FF6B35",
      gradientEnd: "#DC143C",
      textColor: "#ffe6e6",
      accentColor: "#ffcccc"
    },
    {
      name: "Royal Purple",
      background: "#0e0a1a",
      gradientStart: "#9932CC",
      gradientEnd: "#4B0082",
      textColor: "#f0e6ff",
      accentColor: "#e6ccff"
    },
    {
      name: "Cyber Pink",
      background: "#1a0a1a",
      gradientStart: "#FF1493",
      gradientEnd: "#FF69B4",
      textColor: "#ffe6f7",
      accentColor: "#ffccee"
    }
  ];

  const [currentPalette, setCurrentPalette] = useState(colorPalettes[0]);

  const changePalette = (palette) => {
    setCurrentPalette(palette);
    
    document.documentElement.style.setProperty('--hero-bg', palette.background);
    document.documentElement.style.setProperty('--hero-gradient-start', palette.gradientStart);
    document.documentElement.style.setProperty('--hero-gradient-end', palette.gradientEnd);
    document.documentElement.style.setProperty('--hero-text', palette.textColor);
    document.documentElement.style.setProperty('--hero-accent', palette.accentColor);
  };

  return (
   <section className="hero-section py-5" style={{ backgroundColor: currentPalette.background}}>
      <div className="container">


        <div className="row hero-content text-white align-items-center mx-4 ">
          <div className="col-lg-6 col-sm-12 mb-4 mb-lg-0">
            <h1 className="hero-title mb-3" style={{ color: currentPalette.textColor }}>
              Hi, I'm <span 
                className="gradient-text-dynamic"
                style={{ 
                  background: `linear-gradient(45deg, ${currentPalette.gradientStart}, ${currentPalette.gradientEnd})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  display: 'inline-block'
                }}
              >Kabir Singh Sidhu</span> <br />
            </h1>
            <p className="hero-text" style={{ color: currentPalette.textColor }}>
              A 3rd year Computer Science student at <span 
                className="gradient-text-dynamic"
                style={{ 
                  background: `linear-gradient(45deg, ${currentPalette.gradientStart}, ${currentPalette.gradientEnd})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  display: 'inline-block'
                }}
              >Simon Fraser University</span> passionate about building functional and visually appealing web applications.
            </p>
            <p className="hero-text" style={{ color: currentPalette.textColor }}>
              I love collaborating with teams and believe that great projects come from strong communication and continuous learning. When I'm not coding, I enjoy sports, music, and exploring new cultures.
            </p>
            <div className= "contact-Me">
                <a href="https://github.com/kab1rs1dhu" target="_blank" rel="noopener"><img className="social-icon mx-2" src={githubLogo} alt="GitHub logo" /></a>
                <a href="https://www.instagram.com/kxbirsidhu/" target="_blank" rel="noopener"><img className="social-icon mx-2" src={instagramLogo} alt="Instagram logo" /></a>
                <a href="https://www.linkedin.com/in/kab1rs1dhu/" target="_blank" rel="noopener"><img className="social-icon mx-2" src={linkedinLogo} alt="Instagram logo" /></a>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
            <div className="image-box">
              <img
                src={profileImage}
                alt="Kabir's Portrait"
                className="img-fluid rounded"
                style={{ border: `4px solid ${currentPalette.gradientStart}`,
                         boxShadow: `0 0 20px ${currentPalette.gradientStart}40` }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero