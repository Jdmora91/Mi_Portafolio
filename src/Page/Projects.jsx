import React from 'react';
import './Projects.css';
import { useState } from 'react';

function Projects() {
  const projects = [
    {
      images: [
        '/BarberShop/home.png',
        '/BarberShop/Agenda.png'
      ],
      title: "BarberShop Book Website",
      description: "Modern barbershop website with online appointment system, gallery of haircuts, and contact information.",
      link: "https://barber-shop-book.vercel.app/",
      badge: "PERSONAL PROJECT",
      technologies: [
        "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
        "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
        "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
      ]
    },
    {
      images: [
        '/MechTruck/homeTruck.png',
        '/MechTruck/DashTruck.png',
        '/MechTruck/CalendarTruck.png',
        '/MechTruck/NewDateTruck.png',
        '/MechTruck/AddTruck.png',
        '/MechTruck/ConfirmTruck.png',
        '/MechTruck/ReportTruck.png'
      ],
      title: "MechTruck Management System",
      description: "Comprehensive truck maintenance and management system with scheduling, reports, and maintenance tracking.",
      link: "https://github.com/Jdmora91/mechanic",
      badge: "PERSONAL PROJECT",
      technologies: [
        "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
        "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
        "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
        "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
        "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
        "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white"
      ]
    },
    {
      images: [
        './ChatBot/ChatBot.png',
        './ChatBot/chatbot2.png'
      ],
      title: "ChatBot Whit OpenAI",
      description: "A chatbot integrated into my personal portfolio that answers questions about my experience, skills, and projects as if it were me. It uses OpenAI's GPT-3.5 model and is built with React, Node.js, and Express.",
      link: "https://github.com/jdmora91/Mi_Portafolio",
      badge: "PERSONAL PROJECT",
      technologies: [
        "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
        "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
        "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
        "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
        "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
        "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
        "https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white"
      ]
    },
    {
      images: [
        './RecipeFinder/pasta-finder.png',
        './RecipeFinder/recipe-finder.png'
      ],
      title: "Recipe-Finder",
      description: "Recipe Finder is a web application that allows users to search for recipes based on ingredients, dietary preferences, or recipe names. It returns relevant recipes with ingredient lists, preparation steps, and optional filtering features.",
      link: "https://recipe-finder-jdmora91.vercel.app/",
      badge: "PERSONAL PROJECT",
      technologies: [
        "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
        "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
        "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
        "https://img.shields.io/badge/REST%20API-FF6F00?style=for-the-badge&logo=api&logoColor=white",
        "https://img.shields.io/badge/Spoonacular-008F8C?style=for-the-badge&logo=spoonacular&logoColor=white",
        "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"
      ]
    }
  ];

  const [imageIndices, setImageIndices] = useState(projects.map(() => 0));

  const handleImageClick = (projectIndex) => {
    setImageIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      const totalImages = projects[projectIndex].images.length;
      newIndices[projectIndex] = (newIndices[projectIndex] + 1) % totalImages;
      return newIndices;
    });
  };

  return (
    <div className="ProjectsContainer">
      <h1 className="projects-title">My Projects</h1>
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <div className={`project-block ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div
              className="project-images"
              onClick={() => handleImageClick(index)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={project.images[imageIndices[index]]}
                alt={`Project ${project.title}`}
                className="project-thumb"
              />
            </div>
            <div className="project-details">
              <div className="project-badge">{project.badge}</div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((badge, i) => (
                  <img key={i} src={badge} alt="tech" className="tech-badge" />
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project →
              </a>
            </div>
          </div>
          {index !== projects.length - 1 && (
            <div className="project-divider"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Projects;
