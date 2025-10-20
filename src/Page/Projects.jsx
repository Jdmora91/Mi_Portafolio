import React, { useState } from "react";
import "./Projects.css";
import translations from "../i18n/translations";

function Projects({ language }) {
  const t = translations[language].projects;

  const projects = [
        {
      images: [
        "/DemoBienesR/homeFranc.png", 
        "/DemoBienesR/home12.png",
        "/DemoBienesR/zona.png",
        "/DemoBienesR/zona1.png",
        "/DemoBienesR/zona2.png",
        "/DemoBienesR/propiedades1.png",
        "/DemoBienesR/galeria.png",
        "/DemoBienesR/galeria1.png",
        "/DemoBienesR/contactenos.png",
        "/DemoBienesR/contactenos2.png"

      ],
      title: "Pagina Web de Bienes Raíces",
      description:
        language === "en"
          ? "Modern website for a real estate company with multiple sections, 5 different languages, property gallery, and contact form."
          : "Sitio web moderno para empresa de bienes raíces con múltiples secciones, 5 idiomas diferentes, galería de propiedades y formulario de contacto.",
      link: "https://demo-bienesyraices.netlify.app/",
      badge: language === "en" ? "PERSONAL PROJECT" : "PROYECTO PERSONAL",
    },
    {
      images: ["/BarberShop/home.png", "/BarberShop/Agenda.png"],
      title: "BarberShop Book Website",
      description:
        language === "en"
          ? "Modern barbershop website with an online appointment system, gallery, and contact info."
          : "Sitio web moderno para barberías con sistema de citas en línea, galería y contacto.",
      link: "https://barber-shop-book.vercel.app/",
      badge: language === "en" ? "PERSONAL PROJECT" : "PROYECTO PERSONAL",
    },
    {
      images: [
        "/MechTruck/homeTruck.png",
        "/MechTruck/DashTruck.png",
        "/MechTruck/AddTruck.png",
      ],
      title: "MechTruck Management System",
      description:
        language === "en"
          ? "Comprehensive truck management system with scheduling, reports, and maintenance tracking."
          : "Sistema de gestión para camiones con programación, reportes y seguimiento de mantenimiento.",
      link: "https://github.com/Jdmora91/mechanic",
      badge: language === "en" ? "PERSONAL PROJECT" : "PROYECTO PERSONAL",
    },
    {
      images: ["./ChatBot/ChatBot.png", "./ChatBot/chatbot2.png"],
      title: "JD ChatBot",
      description:
        language === "en"
          ? "A chatbot built with OpenAI's API that answers questions about my skills, experience, and projects."
          : "Chatbot creado con la API de OpenAI que responde preguntas sobre mis habilidades, experiencia y proyectos.",
      link: "https://github.com/jdmora91/Mi_Portafolio",
      badge: language === "en" ? "PERSONAL PROJECT" : "PROYECTO PERSONAL",
    },
    {
      images: [
        "./RecipeFinder/pasta-finder.png",
        "./RecipeFinder/recipe-finder.png",
      ],
      title: "Recipe Finder",
      description:
        language === "en"
          ? "Web app that lets users search recipes by ingredients, diet, or name using the Spoonacular API."
          : "Aplicación web que permite buscar recetas por ingredientes, dieta o nombre, usando la API de Spoonacular.",
      link: "https://recipe-finder-jdmora91.vercel.app/",
      badge: language === "en" ? "PERSONAL PROJECT" : "PROYECTO PERSONAL",
    },
    {
      images: [
        "./PuraVidaTech/homePV.png",
        "./PuraVidaTech/nuestroPV.png",
        "./PuraVidaTech/planesPV.png",
        "./PuraVidaTech/sobrePV.png",
        "./PuraVidaTech/chatboxPV.png",
        "./PuraVidaTech/contactoPV.png",
      ],
      title: "Pura Vida Tech",
      description:
        language === "en"
          ? "Personal brand website for offering web and app development services to local businesses and companies, featuring an OpenAI API-powered ChatBox and full bilingual support (English and Spanish) through i18n translation."
          : "Página Web de mi marca personal para la venta de páginas web y aplicaciones a negocios locales y empresas, con implementación de ChatBox de API OpenAI y además en inglés y español con i18n traductor.",
      link: "https://pura-vida-tech.vercel.app/",
      badge: language === "en" ? "PERSONAL PROJECT" : "PROYECTO PERSONAL",
    },
    {
      images: [
        "./ChefCalderon/home.jpg",
        "./ChefCalderon/about.jpg",
        "./ChefCalderon/gallery.jpg",
        "./ChefCalderon/review.jpg",
        "./ChefCalderon/contact.jpg",
      ],
      title: "Chef Calderon",
      description:
        language === "en"
          ? "A website for a professional Costa Rican chef showcasing his signature dishes, offering private services and exclusive events with a high level of elegance — designed to meet the expectations of both Costa Rican and international clients"
          : "Página web para chef costarricense profesional en cocina, en el cual muestra sus platillos y ofrece servicios y eventos con un alto grado de elegancia y una página moderna basada en las necesidades de los ciudadanos costarricenses y extranjeros.",
      link: "https://demo-restaurante-two.vercel.app/",
      badge: language === "en" ? "PERSONAL PROJECT" : "PROYECTO PERSONAL",
    },
  ];

  const [imageIndices, setImageIndices] = useState(projects.map(() => 0));
  const [modal, setModal] = useState({ open: false, projectIndex: null });

  const handleNext = (i) => {
    setImageIndices((prev) => {
      const newIndices = [...prev];
      const total = projects[i].images.length;
      newIndices[i] = (newIndices[i] + 1) % total;
      return newIndices;
    });
  };

  const handlePrev = (i) => {
    setImageIndices((prev) => {
      const newIndices = [...prev];
      const total = projects[i].images.length;
      newIndices[i] = (newIndices[i] - 1 + total) % total;
      return newIndices;
    });
  };

  const openModal = (projectIndex) => setModal({ open: true, projectIndex });
  const closeModal = () => setModal({ open: false, projectIndex: null });

  return (
    <div className="ProjectsContainer">
      <h1 className="projects-title">{t.title}</h1>
      <p className="projects-description">{t.description}</p>

      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <div
            className={`project-block ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="project-images">
              <img
                src={project.images[imageIndices[index]]}
                alt={project.title}
                className="project-thumb"
                onClick={() => openModal(index)}
              />
              <div className="image-nav-buttons">
                <button onClick={() => handlePrev(index)}>‹</button>
                <button onClick={() => handleNext(index)}>›</button>
              </div>
            </div>

            <div className="project-details">
              <div className="project-badge">{project.badge}</div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {language === "en" ? "View Project →" : "Ver Proyecto →"}
              </a>
            </div>
          </div>

          {index !== projects.length - 1 && (
            <div className="project-divider"></div>
          )}
        </React.Fragment>
      ))}

      {modal.open && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              ✕
            </button>
            <img
              src={
                projects[modal.projectIndex].images[
                  imageIndices[modal.projectIndex]
                ]
              }
              alt="Preview"
              className="modal-image"
            />
            <div className="modal-buttons">
              <button onClick={() => handlePrev(modal.projectIndex)}>‹</button>
              <button onClick={() => handleNext(modal.projectIndex)}>›</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
