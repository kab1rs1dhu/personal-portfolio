import React from 'react'
import "./Projects.css"
import Project from "./Project"
import rizzervitImage from "../../assets/rizzervit.png"
import ctfGameImage from "../../assets/ctf.png"
import chat1 from "../../assets/chat1.png"
import learningAppImage1 from "../../assets/l1.png"


const projectsData = [
  {
    title: "RizzervIT - Event Booking Platform",
    role: "Team Leader & Full Stack Developer",
    date: "Nov 2024",
    description: `
- Spearheaded a team of 4 developers in creating a comprehensive event booking platform supporting 10,000+ concurrent users.
- Architected robust full-stack application using Spring Boot and PostgreSQL with complex relational database design.
- Engineered secure authentication system with BCrypt encryption and multi-controller session management.
- Built RESTful API infrastructure for movies, concerts, and sports events with automated email notifications and PDF ticketing.
- Developed comprehensive admin panel for content management and booking analytics, achieving 95% test coverage.
`,
    technologies: ["Spring Boot", "Java", "PostgreSQL", "Thymeleaf", "BCrypt"],
    image: rizzervitImage,
    github: "https://github.com/your-username/rizzervit", // Update with actual link
    website: null
  },
  {
    title: "Capture the Flag - Multiplayer Game",
    role: "Team Leader & Backend Developer",
    date: "Dec 2024",
    description: `
- Led a 4-person development team in building a real-time multiplayer CTF game with custom networking architecture.
- Designed and implemented TCP/IP client-server infrastructure with proprietary network communication protocol.
- Developed core game mechanics including team-based gameplay, flag capture logic, and collision detection systems.
- Built responsive JavaFX interface with seamless real-time state synchronization across multiple clients.
- Managed development workflow and code reviews while contributing 60% of the total codebase.
`,
    technologies: ["Java", "JavaFX", "Socket Programming", "TCP/IP", "Multithreading"],
    image: ctfGameImage,
    github: "https://github.com/your-username/capture-the-flag", // Update with actual link
    website: null
  },
  {
    title: "Group Chat Server",
    role: "Backend Developer",
    date: "Jan - Apr 2025",
    description: `
- Built high-performance multi-client chat server in C with TCP/IP socket programming and concurrent I/O handling.
- Architected custom binary communication protocol ensuring message ordering, reliable delivery, and client identification.
- Implemented comprehensive fuzzing client with pthreads for stress testing malformed and edge-case scenarios.
- Designed dynamic client connection management with full protocol compliance and two-phase commit shutdown protocol.
- Conducted extensive testing using telnet and custom protocol validators to ensure real-time performance and reliability.
`,
    technologies: ["C", "TCP/IP Sockets", "Concurrency", "Pthreads", "Protocol Design"],
    image: chat1,
    github: "https://github.com/kab1rs1dhu/Group-Chat-Server",
    website: null
  },
  {
    title: "Learning for All - Educational App",
    role: "Mobile Developer",
    date: "Sep 2025", // Changed from 2025 to 2024
    description: `
- Created comprehensive educational Android application targeting elementary students (Class 1-5) with structured curriculum.
- Integrated Firebase Authentication and Firestore database for secure user management and learning progress tracking.
- Developed interactive learning modules covering mathematics, pattern recognition, and foundational academic concepts.
- Designed intuitive child-friendly interface with progress visualization and seamless topic navigation features.
- Built structured educational content with visual exercises and engaging interactive learning activities.
`,
    technologies: ["Kotlin", "Android", "Firebase", "Firestore", "UI/UX Design"],
    image: learningAppImage1,
    github: "https://github.com/your-username/learning-for-all", // Update with actual link
    website: null
  }
];

const Projects = () => {
  // Debug: Log all imported images
  console.log('Imported images:', {
    rizzervitImage,
    ctfGameImage,
    chat1,
    learningAppImage1
  });
  
  return (
    <div className="project-page-container">
      <h1 className="heading">Featured Projects</h1>
      <h2 className='about-subtitle'>Here are some of my notable projects:</h2>
      {projectsData.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          role={project.role}
          date={project.date}
          description={project.description}
          technologies={project.technologies}
          image={project.image}
          github={project.github}
          website={project.website}
        />
      ))}
    </div>
  );
};

export default Projects;