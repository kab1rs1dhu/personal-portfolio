import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About"
import Projects from "./Components/Projects/Project"
import Skills from "./Components/Skills/Skills"

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/skills" element={<Skills/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App