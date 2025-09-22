import React from 'react'

const Skills = () => {
  return (
    <>
      <div className="col-lg-4 col-md-12 mx-5 my-4">

        {/* Skills Section */}
        <div className="about-skills">
          <h3 className="fs-4 fw-semibold mb-4 gradient-text">Technical Skills</h3>

          <div className="row g-3">
            <div className="col-12">
              <div className="skill-item p-3 rounded-3">
                <span className="skill-name fs-6 fw-medium d-block mb-2">HTML & CSS</span>
                <div className="skill-bar rounded-pill overflow-hidden">
                  <div className="skill-progress rounded-pill" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="skill-item p-3 rounded-3">
                <span className="skill-name fs-6 fw-medium d-block mb-2">React JS</span>
                <div className="skill-bar rounded-pill overflow-hidden">
                  <div className="skill-progress rounded-pill" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="skill-item p-3 rounded-3">
                <span className="skill-name fs-6 fw-medium d-block mb-2">JavaScript</span>
                <div className="skill-bar rounded-pill overflow-hidden">
                  <div className="skill-progress rounded-pill" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="skill-item p-3 rounded-3">
                <span className="skill-name fs-6 fw-medium d-block mb-2">Next JS</span>
                <div className="skill-bar rounded-pill overflow-hidden">
                  <div className="skill-progress rounded-pill" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Stats */ }
      <div className="col-lg-3 col-md-12">
        <div className="about-stats h-100 d-flex flex-column justify-content-center">
          <div className="row g-4 text-center">
            <div className="col-6 col-lg-12">
              <div className="stat-item">
                <span className="stat-number display-2 fw-bold gradient-text d-block">5+</span>
                <span className="stat-label fs-6 text-light-emphasis">Projects</span>
              </div>
            </div>
            <div className="col-6 col-lg-12">
              <div className="stat-item">
                <span className="stat-number display-2 fw-bold gradient-text d-block">3+</span>
                <span className="stat-label fs-6 text-light-emphasis">Years Learning</span>
              </div>
            </div>
            <div className="col-6 col-lg-12">
              <div className="stat-item">
                <span className="stat-number display-2 fw-bold gradient-text d-block">10+</span>
                <span className="stat-label fs-6 text-light-emphasis">Technologies</span>
              </div>
            </div>
            <div className="col-6 col-lg-12">
              <div className="stat-item">
                <span className="stat-number display-2 fw-bold gradient-text d-block">∞</span>
                <span className="stat-label fs-6 text-light-emphasis">Passion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills