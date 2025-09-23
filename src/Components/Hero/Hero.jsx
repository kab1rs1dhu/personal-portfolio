import React from 'react'
import "./Hero.css"
import githubLogo from "../../assets/github.png";
import instagramLogo from "../../assets/instagram.png";
import linkedinLogo from "../../assets/linkedin.png";
import profileImage from "../../assets/mypic.png"

const Hero = () => {
  return (
   <section className="hero-section py-5">
      <div className="container">
        <div className="row hero-content text-white align-items-center">
          <div className="col-lg-6 col-sm-12 mb-4 mb-lg-0">
            <h1 className="hero-title mb-3 text-light">
              Hi, I’m <strong className="gradient-text">Kabir Singh Sidhu</strong> <br />
            </h1>
            <p className="hero-text text-light">
              A 3rd year Computer Science student at <strong className="gradient-text">Simon Fraser University</strong> passionate about building functional and visually appealing web applications.
            </p>
            <p className="hero-text text-light">
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
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero