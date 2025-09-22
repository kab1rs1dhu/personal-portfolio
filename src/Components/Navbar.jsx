import React from "react"
import "./Navbar.css"
import {Link, useLocation} from "react-router-dom"
import Projects from "./Projects/Project"
import About from "./About/About"
import Skills from "./Skills/Skills"


const Navbar = () => {

    const location = useLocation();


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 py-3">
            <div className="container-fluid">
                <a className="navbar-brand text-light fs-1" href="#">Portfolio</a>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-light" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link text-light ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-light ${location.pathname === "/projects" ? "active" : ""}`} to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-light ${location.pathname === "/skills" ? "active" : ""}`} to="/skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-light ${location.pathname === "/about" ? "active" : ""}`} to="/about">About me</Link>
                        </li>
                    </ul>
                    <button className="btn btn-primary btn btn-outline-light" type="submit">Contact me</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
