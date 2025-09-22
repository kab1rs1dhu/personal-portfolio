import React from "react"
import "./Navbar.css"

const Navbar = () => {
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
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">About me</a>
                        </li>
                    </ul>
                    <button className="btn btn-primary btn btn-outline-light" type="submit">Contact me</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
