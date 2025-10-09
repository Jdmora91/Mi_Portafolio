import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'



function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1 className="navbar-title">My Portfolio</h1>
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Hello</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar