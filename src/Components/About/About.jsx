import React from 'react'
import "./About.css"
import profileImage from "../../assets/mypic.png" // Ensure you have a profile image in the specified path

const About = () => {
  return (
    <div className='about'>
        <div className="container-fluid">
            {/* Compact Title */}
            <div className="row justify-content-center mb-4">
                <div className="col-12 text-center">
                    <h1 className="display-3 fw-bold mb-3">About Me</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="row g-4 align-items-start">
                
                {/* Left Column - Image + Stats */}
                <div className="col-lg-3 col-md-12">
                    {/* Profile Image */}
                    <div className="about-image-container mb-4">
                        <img src={profileImage} alt="profileImage" className="img-fluid rounded-3" />
                    </div>
                    
                    {/* Compact Stats */}
                    <div className="about-stats">
                        <div className="row g-2 text-center">
                            <div className="col-6 col-lg-12">
                                <div className="stat-item p-2 rounded-3">
                                    <span className="stat-number fs-1 fw-bold gradient-text d-block">5+</span>
                                    <span className="stat-label small text-light-emphasis">Projects</span>
                                </div>
                            </div>
                            <div className="col-6 col-lg-12">
                                <div className="stat-item p-2 rounded-3">
                                    <span className="stat-number fs-1 fw-bold gradient-text d-block">3</span>
                                    <span className="stat-label small text-light-emphasis">Years</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Column - About Content */}
                <div className="col-lg-5 col-md-12">
                    <div className="about-content">
                        <p className="fs-6 lh-base text-light mb-3">
                            Hi! I'm <strong className="text-white">Kabir Singh Sidhu</strong>, a 3rd year Computer Science student at 
                            <strong className="text-white"> Simon Fraser University</strong>. I'm passionate about creating 
                            functional and visually appealing web applications.
                        </p>
                        
                        <p className="fs-6 lh-base text-light mb-3">
                            I enjoy collaborating with teams and believe great projects come from strong communication 
                            and continuous learning. When not coding, I love sports, music, and exploring new cultures.
                        </p>
                        
                        <div className="contact-info mt-3">
                            <p className="fs-6 mb-2">
                                <strong className="gradient-text">📧 Email:</strong> 
                                <span className="text-light"> kabir@example.com</span>
                            </p>
                            <p className="fs-6 mb-2">
                                <strong className="gradient-text">🎓 University:</strong> 
                                <span className="text-light"> Simon Fraser University</span>
                            </p>
                            <p className="fs-6 mb-0">
                                <strong className="gradient-text">📍 Location:</strong> 
                                <span className="text-light"> Vancouver, BC</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-12">
                    
                    {/* Programming Languages */}
                    <div className="skill-section mb-4">
                        <h4 className="fs-5 fw-semibold mb-3 gradient-text">💻 Languages</h4>
                        <div className="row g-2">
                            <div className="col-6">
                                <div className="skill-badge">JavaScript</div>
                            </div>
                            <div className="col-6">
                                <div className="skill-badge">Python</div>
                            </div>
                            <div className="col-6">
                                <div className="skill-badge">HTML/CSS</div>
                            </div>
                            <div className="col-6">
                                <div className="skill-badge">Java</div>
                            </div>
                            <div className="col-6">
                                <div className="skill-badge">C++</div>
                            </div>
                            <div className="col-6">
                                <div className="skill-badge">SQL</div>
                            </div>
                        </div>
                    </div>

                    {/* Frameworks & Libraries */}
                    <div className="skill-section mb-4">
                        <h4 className="fs-5 fw-semibold mb-3 gradient-text">🛠️ Frameworks</h4>
                        <div className="row g-2">
                            <div className="col-6">
                                <div className="skill-badge">React</div>
                            </div>
                            <div className="col-6">
                                <div className="skill-badge">Next.js</div>
                            </div>
                            <div className="col-6">
                                <div className="skill-badge">Node.js</div>
                            </div>
                            <div className="col-6">
                                <div className="skill-badge">Express</div>
                            </div>
                            <div className="col-6">
                                <div className="skill-badge">Bootstrap</div>
                            </div>
                            <div className="col-6">
                                <div className="skill-badge">Tailwind</div>
                            </div>
                        </div>
                    </div>

                    {/* Tools & Technologies */}
                    <div className="skill-section mb-4">
                        <h4 className="fs-5 fw-semibold mb-3 gradient-text">⚡ Tools</h4>
                        <div className="row g-2">
                            <div className="col-6">
                                <div className="skill-badge">Git</div>
                            </div>
                            <div className="col-6">
                                <div className="skill-badge">VS Code</div>
                            </div>
                            <div className="col-6">
                                <div className="skill-badge">MongoDB</div>
                            </div>
                            <div className="col-6">
                                <div className="skill-badge">Firebase</div>
                            </div>
                            <div className="col-6">
                                <div className="skill-badge">Figma</div>
                            </div>
                            <div className="col-6">
                                <div className="skill-badge">Postman</div>
                            </div>
                        </div>
                    </div>

                    {/* Currently Learning */}
                    <div className="skill-section">
                        <h4 className="fs-5 fw-semibold mb-3 gradient-text">📚 Learning</h4>
                        <div className="row g-2">
                            <div className="col-6">
                                <div className="skill-badge learning">TypeScript</div>
                            </div>
                            <div className="col-6">
                                <div className="skill-badge learning">Docker</div>
                            </div>
                            <div className="col-6">
                                <div className="skill-badge learning">AWS</div>
                            </div>
                            <div className="col-6">
                                <div className="skill-badge learning">GraphQL</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About