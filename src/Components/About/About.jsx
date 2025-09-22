import React from 'react'
import "./About.css"
import mypic from "../../assets/mypic.png"

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={mypic} alt="" />
            </div>
            <div className="about-right">
                <div className="about-content">
                    <p>Hello! My name is Kabir Singh Sidhu and I am a 3rd year Computer Science student at Simon Fraser University. I have a passion for coding and love to create web applications that are both functional and visually appealing. I have experience working with a variety of programming languages and frameworks, including JavaScript, React, Node.js, and Python.</p>
                    
                    <p>In addition to my technical skills, I am also a strong communicator and enjoy collaborating with others. I believe that teamwork is essential to creating successful projects, and I am always eager to learn from my peers.</p>
                    
                    <p>When I'm not coding, I enjoy playing sports, listening to music, and spending time with friends and family. I am also an avid traveler and love exploring new places and cultures.</p>
                    
                    <p>Thank you for taking the time to learn a little bit about me. If you have any questions or would like to connect, please don't hesitate to reach out!</p>
                </div>
                
                <div className="about-skills">
                    <div className="skill-item">
                        <span className="skill-name">HTML & CSS</span>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: '90%'}}></div>
                        </div>
                    </div>
                    
                    <div className="skill-item">
                        <span className="skill-name">React JS</span>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: '80%'}}></div>
                        </div>
                    </div>
                    
                    <div className="skill-item">
                        <span className="skill-name">JavaScript</span>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: '85%'}}></div>
                        </div>
                    </div>
                    
                    <div className="skill-item">
                        <span className="skill-name">Next JS</span>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: '75%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="about-stats">
                <div className="stat-item">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Projects</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About