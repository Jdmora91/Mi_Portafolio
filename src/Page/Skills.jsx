import React from 'react';
import './Skills.css';
import { FaUserGear } from 'react-icons/fa6';

const skills = [
  {
    category: "Frontend Development",
    years: "1 year",
    technologies: "React • JavaScript • HTML • CSS"
  },
  {
    category: "Backend Development",
    years: "1 year",
    technologies: "Python • Flask • Node.js • Express.js"
  },
  {
    category: "Databases",
    years: "1 year",
    technologies: "PostgreSQL • SQLite"
  },
  {
    category: "AI & APIs",
    years: "1 year",
    technologies: "OpenAI API • REST API • Spoonacular"
  },
  {
    category: "Tools & Platforms",
    years: "1 year",
    technologies: "Vercel • GitHub • Postman"
  },
  {
    category: "Design",
    years: "1+ year",
    technologies: "Figma • Canva • Photoshop (basic)"
  }
];

function Skills() {
  return (
    <div className="skills-section">
      <div className="skills-header">
        <FaUserGear className="skills-icon" />
        <h2 className="skills-title">My Skills</h2>
        <p className="skills-subtitle">
          I've developed a strong skill set over the years, working across frontend, backend, databases, and design tools.
        </p>
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
