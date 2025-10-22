import React from 'react'
import "./Projects.css"
import Project from "./Project"
import hirewiseImage from "../../assets/hirewise.png"
import byteSyntaxImage from "../../assets/byte-syntax.png"
import changeCaseImage from "../../assets/change-case.png"
import rizzervitImage from "../../assets/rizzervit.png"
import ctfGameImage from "../../assets/ctf.png"
import chat1 from "../../assets/chat1.png"

const projectsData = [

   {
    title: "HireWise – AI Mock Interview Platform",
    role: "Founder & Full Stack Developer",
    date: "Jan 2025",
    description: [
      "Designed and shipped an AI-driven mock interview experience that pairs voice-based coaching with auto-generated question banks.",
      "Built a Next.js 15 / React 19 front end with real-time Vapi voice sessions, custom UI components, and persistent interview transcripts.",
      "Integrated Google Gemini via @ai-sdk/google to analyze transcripts and generate structured performance feedback stored in Firebase.",
      "Implemented Firebase Auth + Firestore admin APIs for server actions, secure session cookies, and user-specific interview histories.",
      "Automated interview creation flows with dynamic tech-stack normalization, randomized cover imagery, and role-specific question templates."
    ],
    technologies: ["Next.js 15", "React 19", "TypeScript", "Firebase", "Google Gemini", "Vapi"],
    image: hirewiseImage,
    github: "https://github.com/your-username/hirewise",
    website: "https://hirewise.dev"
  },


  {
  title: "Byte Syntax – Realtime Collaboration Hub",
  role: "Founder & Full Stack Developer",
  date: "2024",
  description: [
    "Designed a Stream Chat workspace with channel discovery, pinned messaging, and bespoke theming to keep distributed teams aligned.",
    "Crafted a Clerk-authenticated onboarding flow featuring a Three.js particle hero, branded storytelling, and modal sign-in.",
    "Launched Stream Video rooms with speaker layouts, shared presence, and toast-driven error handling that reuse chat identities.",
    "Automated Clerk webhook ingestion via Inngest to upsert MongoDB profiles, mint Stream tokens, and auto-join discoverable channels.",
    "Packaged the Vite SPA as an installable PWA layered with service-worker caching, Sentry observability, and React Query data fetching."
  ],
  technologies: ["Vite", "React 19", "JavaScript", "Express", "MongoDB", "Stream Chat", "Stream Video", "Clerk", "Inngest", "Sentry"],
  image: byteSyntaxImage,
  github: "https://github.com/your-username/bytesyntax",
  website: "https://byte-syntax.vercel.app/"
},


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
    github: "https://github.com/kab1rs1dhu/rizzervit",
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
    github: "https://github.com/DakshArora07/CaptureTheFlag-CMPT371",
    website: null
  },
  {
  title: "ChangeCase – VS Code Case Converter",
  role: "Solo Developer",
  date: "Oct 2024",
  description: [
    "Published a VS Code extension that instantly converts selected text across six naming conventions with both command palette entries and cross-platform keyboard shortcuts.",
    "Built reusable, format-aware transformation utilities that preserve punctuation, multi-line selections, and mixed input while normalizing to the target case.",
    "Integrated tightly with the VS Code Extension API to register commands, activation events, and editor-focused keybindings for a frictionless editing experience.",
    "Authored Mocha-based unit tests with helper fixtures that validate every conversion path and guard against regressions when expanding the command set.",
    "Automated linting and extension packaging via npm scripts, ESLint 9, and the VS Code Test CLI to keep the codebase reliable as features evolve."
  ],
    technologies: ["VS Code Extension API", "JavaScript", "Node.js", "Mocha", "ESLint"],
    image: changeCaseImage,
    github: "https://github.com/kab1rs1dhu/ChangeCase",
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
    github: "",
    website: null
  },
];

const Projects = () => {
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
