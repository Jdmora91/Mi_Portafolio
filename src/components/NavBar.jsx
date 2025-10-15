import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faProjectDiagram,
  faRoute,
  faUserGear,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import LanguageToggle from "./LanguageToggle";
import translations from "../i18n/translations";
import "./NavBar.css";

function NavBar({ language, toggleLanguage }) {
  const [activeItem, setActiveItem] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = translations[language].navbar;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { id: "home", icon: faHome, text: t.home },
    { id: "profile", icon: faUser, text: t.about },
    { id: "projects", icon: faProjectDiagram, text: t.projects },
    { id: "TimeLine", icon: faRoute, text: t.timeline },
    { id: "Skills", icon: faUserGear, text: t.skills },
    { id: "Contact", icon: faEnvelope, text: t.contact },
  ];

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-white/10">
      <div className="navbar-container">
        {/* Logo / Nombre */}
        <div className="navbar-logo" onClick={() => scrollToSection("home")}>
          <span className="navbar-title">José D. Mora Ramirez</span>
        </div>

        {/* Botón Mobile */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </div>

        {/* Links */}
        <ul className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  setActiveItem(item.id);
                  scrollToSection(item.id);
                }}
                className={activeItem === item.id ? "active" : ""}
              >
                <FontAwesomeIcon icon={item.icon} className="navbar-icon" />
                <span>{item.text}</span>
              </button>
            </li>
          ))}
          <div className="navbar-lang">
            <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
