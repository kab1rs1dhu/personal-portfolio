import React from 'react'
import "./About.css"
import profileImage from "../../assets/mypic.png" // Ensure you have a profile image in the specified path

const About = () => {
  return (
    <div className='about'>
        <div className="container-fluid">
            <div className="row justify-content-center mb-4">
                <div className="col-12 text-center">
                    <h1 className="display-3 fw-bold mb-3">About Me</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="row g-4 align-items-start">
                
                <div className="col-lg-3 col-md-12">
                    <div className="about-image-container mb-4">
                        <img src={profileImage} alt="profileImage" className="img-fluid rounded-3" />
                    </div>
                    
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


                <div className="col-lg-5 col-md-12 my-5 ">
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
                                <strong className="gradient-text">📧 Email: </strong> 
                                <span className="text-light">sidhukabir55@gmail.com</span>
                            </p>
                            <p className="fs-6 mb-2">
                                <strong className="gradient-text">🎓 University: </strong> 
                                <span className="text-light"> Simon Fraser University</span>
                            </p>
                            <p className="fs-6 mb-0">
                                <strong className="gradient-text">📍 Location: </strong> 
                                <span className="text-light"> Vancouver, BC</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 col-md-6">
                    <h2 className="display-6 fw-bold mb-3 gradient-text">My Interests</h2>
                    <ul className="list-unstyled">
                        <li className="fs-6 text-light-emphasis">🌐 Web Development</li>
                        <li className="fs-6 text-light-emphasis">🎨 Graphic Design</li>
                        <li className="fs-6 text-light-emphasis">📚 Learning New Technologies</li>
                        <li className="fs-6 text-light-emphasis">⚽ Sports</li>
                        <li className="fs-6 text-light-emphasis">🌍 Traveling</li>
                    </ul>
                </div>

<div className="col-lg-5 col-md-6">
    <div className="goals-section">
        <h2 className="display-6 fw-bold mb-4 gradient-text">My Future Goals</h2>

        <div className="primary-goal mb-4">
            <div className="goal-item featured p-3 rounded-3">
                <div className="goal-icon-large mb-2">🏢</div>
                <h5 className="goal-title text-white mb-2">Build My Own Company</h5>
                <p className="goal-description text-light-emphasis mb-0">
                    Create innovative solutions that make a real difference in people's lives
                    and solves real problems.
                </p>
            </div>
        </div>


        <div className="goals-grid">
            <div className="row g-3">
                <div className="col-md-6">
                    <div className="goal-item p-3 rounded-3 h-100">
                        <div className="goal-icon mb-2">🚀</div>
                        <h6 className="goal-title text-white mb-1">Full-Stack Developer</h6>
                        <p className="goal-description small text-light-emphasis mb-0">
                            Master both frontend and backend technologies
                        </p>
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="goal-item p-3 rounded-3 h-100">
                        <div className="goal-icon mb-2">📈</div>
                        <h6 className="goal-title text-white mb-1">Open Source Contributor</h6>
                        <p className="goal-description small text-light-emphasis mb-0">
                            Give back to the developer community
                        </p>
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="goal-item p-3 rounded-3 h-100">
                        <div className="goal-icon mb-2">🎓</div>
                        <h6 className="goal-title text-white mb-1">Master's Degree</h6>
                        <p className="goal-description small text-light-emphasis mb-0">
                            Deepen my Computer Science knowledge
                        </p>
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="goal-item p-3 rounded-3 h-100">
                        <div className="goal-icon mb-2">🌍</div>
                        <h6 className="goal-title text-white mb-1">Digital Nomad</h6>
                        <p className="goal-description small text-light-emphasis mb-0">
                            Work remotely while exploring the world
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Timeline Indicator */}
        <div className="timeline-note mt-4 text-center">
            <small className="text-light-emphasis">
                <span className="gradient-text fw-semibold">2024-2030:</span> Turning dreams into reality, one step at a time
            </small>
        </div>
    </div>
</div>
            </div>
        </div>
    </div>
  )
}

export default About