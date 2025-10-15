import React from "react";
import "./Skills.css";
import { FaUserGear } from "react-icons/fa6";
import translations from "../i18n/translations";

function Skills({ language }) {
  const t = translations[language].skills;

  const skills =
    language === "en"
      ? [
          {
            category: "Frontend Development",
            years: "1 year",
            technologies: "React • JavaScript • HTML • CSS",
          },
          {
            category: "Backend Development",
            years: "1 year",
            technologies: "Python • Flask • Node.js • Express.js",
          },
          {
            category: "Databases",
            years: "1 year",
            technologies: "PostgreSQL • SQLite",
          },
          {
            category: "AI & APIs",
            years: "1 year",
            technologies: "OpenAI API • REST API • Spoonacular",
          },
          {
            category: "Tools & Platforms",
            years: "1 year",
            technologies: "Vercel • GitHub • Postman",
          },
          {
            category: "Design",
            years: "1+ year",
            technologies: "Figma • Canva • Photoshop (basic)",
          },
        ]
      : [
          {
            category: "Desarrollo Frontend",
            years: "1 año",
            technologies: "React • JavaScript • HTML • CSS",
          },
          {
            category: "Desarrollo Backend",
            years: "1 año",
            technologies: "Python • Flask • Node.js • Express.js",
          },
          {
            category: "Bases de Datos",
            years: "1 año",
            technologies: "PostgreSQL • SQLite",
          },
          {
            category: "IA y APIs",
            years: "1 año",
            technologies: "OpenAI API • REST API • Spoonacular",
          },
          {
            category: "Herramientas y Plataformas",
            years: "1 año",
            technologies: "Vercel • GitHub • Postman",
          },
          {
            category: "Diseño",
            years: "1+ año",
            technologies: "Figma • Canva • Photoshop (básico)",
          },
        ];

  return (
    <div className="skills-section">
      <div className="skills-header">
        <FaUserGear className="skills-icon" />
        <h2 className="skills-title">{t.title}</h2>
        <p className="skills-subtitle">{t.description}</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <h3>{skill.category}</h3>
              <span className="skill-badge">{skill.years}</span>
            </div>
            <p className="skill-tech">{skill.technologies}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
