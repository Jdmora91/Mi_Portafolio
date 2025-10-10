import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBriefcase,
    faHome,
    faUser,
    faProjectDiagram,
    faRoute,
    faEnvelope,
    faUserGear,
    faBars,
    faTimes
} from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'

function NavBar() {
    const [activeItem, setActiveItem] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.classList.toggle('menu-open')
    };

    const menuItems = [
        {id: 'home', icon: faHome, text: 'Home'},
        {id: 'profile', icon: faUser, text: 'About Me'},
        {id: 'projects', icon: faProjectDiagram, text: 'Projects'},
        {id: 'TimeLine', icon: faRoute, text: 'TimeLine'},
        {id: 'Skills', icon: faUserGear, text: 'Skills'},
        {id: 'contact', icon: faEnvelope, text: 'Contact'},
    ];


    return (
        <nav className="navbar">
            <div className="navbar-logo">
            </div>
            <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
            </div>

            <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                {menuItems.map(item => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            className={activeItem === item.id ? 'active' : ''}
                            onClick={() => setActiveItem(item.id)}
                        >
                            <FontAwesomeIcon icon={item.icon} className='navbar-icon-item' />
                            <span className="navbar-link-text">{item.text}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar