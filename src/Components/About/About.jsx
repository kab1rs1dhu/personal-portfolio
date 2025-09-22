import React from 'react'
import "./About.css"

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src="" alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src="" alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hello! My name is Kabir Singh Sidhu and I am a 3rd year Computer Science student at Simon Fraser University. I have a passion for coding and love to create web applications that are both functional and visually appealing. I have experience working with a variety of programming languages and frameworks, including JavaScript, React, Node.js, and Python.</p>
                        <p>In addition to my technical skills, I am also a strong communicator and enjoy collaborating with others. I believe that teamwork is essential to creating successful projects, and I am always eager to learn from my peers.</p>
                        <p>When I'm not coding, I enjoy playing sports, listening to music, and spending time with friends and family. I am also an avid traveler and love exploring new places and cultures.</p>
                        <p>Thank you for taking the time to learn a little bit about me. If you have any questions or would like to connect, please don't hesitate to reach out!</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p><hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p><hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Next JS</p><hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Java</p><hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Python</p><hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>C/C++</p><hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>X86-64 Assembly</p><hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>R</p><hr style={{ width: "80%" }} />

                        </div>
                    </div>

                </div>

                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>5+</h1>
                        <p>Projects</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>5+</h1>
                        <p>Projects</p>
                        <hr />
                        <div className="about-achievement">
                            <h1>5+</h1>
                            <p>Projects</p>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <h1>5+</h1>
                            <p>Projects</p>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About