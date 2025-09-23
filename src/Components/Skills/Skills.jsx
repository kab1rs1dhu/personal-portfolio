import React from 'react'

const languages = [
  { name: "JavaScript", level: 85 },
  { name: "Java", level: 80 },
  { name: "Python", level: 75 },
  { name: "Kotlin", level: 70 },
  { name: "HTML & CSS", level: 90 },
  { name: "SQL", level: 75 },
  { name: "C/C++", level: 70 },
  { name: "Assembly", level: 80 },
  { name: "R", level: 65 }
];

const frameworks = [
  { name: "React.js", level: 80 },
  { name: "React Native", level: 70 },
  { name: "Next.js", level: 75 },
  { name: "Spring Boot", level: 78 },
  { name: "Firebase", level: 75 },
  { name: "Flask", level: 70 },
  { name: "Node.js", level: 77 },
  { name: "Express.js", level: 68 }
];

const toolsAndTech = [
  { name: "Docker", level: 80 },
  { name: "PostgreSQL", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Git & GitHub", level: 85 },
  { name: "AWS", level: 65 },
  { name: "Linux", level: 75 },
  { name: "Figma", level: 70 },
  { name: "Postman", level: 80 }
];

const Skills = () => {


  const SkillSection = ({ title, skills, icon }) => (
    <div className="skill-section mb-4 p-3 rounded-3 bg-dark-emphasis col-12">
      <div className="d-flex align-items-center mb-3">
        <span className="skill-icon me-2">{icon}</span>
        <h4 className="fs-5 fw-semibold mb-0 gradient-text">{title}</h4>
      </div>
      <div className="row g-3">
        {skills.map((skill, index) => (
          <div className="col-12" key={index}>
            <div className="skill-item p-3 rounded-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="skill-name fs-6 fw-medium">{skill.name}</span>
                <span className="skill-percentage text-muted small">{skill.level}%</span>
              </div>
              <div className="skill-bar rounded-pill overflow-hidden">
                <div
                  className="skill-progress rounded-pill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div className="skills-page-container">
      <div className="container-fluid">
        {/* Page Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <h1 className="display-3 fw-bold mb-3 gradient-text">Technical Skills</h1>
            <p className="fs-5 text-light-emphasis mb-0">A comprehensive overview of my technical expertise and proficiency levels</p>
          </div>
        </div>

        {/* Main Skills Content */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <div className="row g-4">
              {/* Programming Languages */}
              <div className="col-lg-4 col-md-3">
                <SkillSection
                  title="Programming Languages"
                  skills={languages}
                  icon="💻"
                />
              </div>

              {/* Frameworks & Libraries */}
              <div className="col-lg-4 col-md-3">
                <SkillSection
                  title="Frameworks & Libraries"
                  skills={frameworks}
                  icon="🚀"
                />
              </div>

              {/* Tools & Technologies */}
              <div className="col-lg-4 col-md-3">
                <SkillSection
                  title="Tools & Technologies"
                  skills={toolsAndTech}
                  icon="🛠️"
                />
              </div>
            </div>


            <div className="text-center mx-3 bg-dark-emphasis">
              <h2 className="fs-4 fw-semibold gradient-text">Currently learning:</h2>
              <div className="d-flex justify-content-between align-items-center mb-2"></div>
              <div className="skill-item p-3 rounded-3 bg-dark-emphasis mb-4 rounded-3 bg-dark-emphasis col-12">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="skill-name fs-6 fw-medium">Rust</span>
                  <span className="skill-percentage text-muted small">1%</span>
                </div>
                <div className="skill-bar rounded-pill overflow-hidden">
                  <div
                    className="skill-progress rounded-pill"
                    style={{ width: `1%` }}
                  ></div>
                </div>
              </div>

              <div className="skill-item p-3 rounded-3 bg-dark-emphasis mb-4 p-3 rounded-3 bg-dark-emphasis col-12">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="skill-name fs-6 fw-medium">Go</span>
                  <span className="skill-percentage text-muted small">1%</span>
                </div>
                <div className="skill-bar rounded-pill overflow-hidden">
                  <div
                    className="skill-progress rounded-pill"
                    style={{ width: `1%` }}
                  ></div>
                </div>
              </div>

              <div className="skill-item p-3 rounded-3 bg-dark-emphasis mb-4 p-3 rounded-3 bg-dark-emphasis col-12">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="skill-name fs-6 fw-medium">RISC-V</span>
                  <span className="skill-percentage text-muted small">1%</span>
                </div>
                <div className="skill-bar rounded-pill overflow-hidden">
                  <div
                    className="skill-progress rounded-pill"
                    style={{ width: `1%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="col-lg-3 col-md-12 mt-4 mt-lg-0">
            <div className="stats-container">
              <h4 className="fs-4 fw-semibold mb-4 gradient-text text-center">
                <span className="me-2">📊</span>
                Achievements
              </h4>
              <div className="row g-3">
                <div className="col-6 col-lg-12">
                  <div className="stat-item p-3 rounded-3 text-center">
                    <span className="stat-number display-4 fw-bold gradient-text d-block">5+</span>
                    <span className="stat-label fs-6 text-light-emphasis">Major Projects</span>
                  </div>
                </div>
                <div className="col-6 col-lg-12">
                  <div className="stat-item p-3 rounded-3 text-center">
                    <span className="stat-number display-4 fw-bold gradient-text d-block">3+</span>
                    <span className="stat-label fs-6 text-light-emphasis">Years Learning</span>
                  </div>
                </div>
                <div className="col-6 col-lg-12">
                  <div className="stat-item p-3 rounded-3 text-center">
                    <span className="stat-number display-4 fw-bold gradient-text d-block">25+</span>
                    <span className="stat-label fs-6 text-light-emphasis">Technologies</span>
                  </div>
                </div>
                <div className="col-6 col-lg-12">
                  <div className="stat-item p-3 rounded-3 text-center">
                    <span className="stat-number display-4 fw-bold gradient-text d-block">∞</span>
                    <span className="stat-label fs-6 text-light-emphasis">Passion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Skills Summary */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div className="skills-summary p-4 rounded-3">
              <h4 className="gradient-text mb-3 text-center">
                <span className="me-2">🎯</span>
                Core Competencies
              </h4>
              <div className="row g-3">
                <div className="col-md-4 text-center">
                  <div className="competency-item">
                    <span className="competency-icon">🌐</span>
                    <h6 className="text-white mt-2">Full-Stack Development</h6>
                    <p className="text-light-emphasis small">End-to-end web application development</p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="competency-item">
                    <span className="competency-icon">📱</span>
                    <h6 className="text-white mt-2">Mobile Development</h6>
                    <p className="text-light-emphasis small">Cross-platform mobile applications</p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="competency-item">
                    <span className="competency-icon">🗄️</span>
                    <h6 className="text-white mt-2">Database Design</h6>
                    <p className="text-light-emphasis small">Efficient data architecture & optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills