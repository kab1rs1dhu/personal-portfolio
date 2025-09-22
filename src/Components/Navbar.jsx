import React from "react"
import "./Navbar.css"
import { Link, useLocation } from "react-router-dom"

const closeNavbarGracefully = () => {
        const navbarCollapse = document.getElementById('navbarSupportedContent');
        if (navbarCollapse) {
            // Use Bootstrap's Collapse API for native animation
            const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
                toggle: false // Don't auto-toggle, just control it
            });
            bsCollapse.hide(); // This uses Bootstrap's native slide animation
        }
    };

const Navbar = () => {

    const location = useLocation();


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 py-3">
            <div className="container-fluid">
                <a className="navbar-brand text-light fs-1" href="#">Portfolio</a>
                
                <div className="d-flex align-items-center">                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                
                <div className="collapse navbar-collapse text-light" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link text-light ${location.pathname === "/" ? "active" : ""}`} to="/"
                            onClick={closeNavbarGracefully}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-light ${location.pathname === "/projects" ? "active" : ""}`} to="/projects"
                            onClick={closeNavbarGracefully}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-light ${location.pathname === "/skills" ? "active" : ""}`} to="/skills"
                            onClick={closeNavbarGracefully}>Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-light ${location.pathname === "/about" ? "active" : ""}`} to="/about"
                            onClick={closeNavbarGracefully}>About me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
