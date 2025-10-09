import React, { useState } from 'react';
import './Projects.css';

function Projects() {
    const [currentProject, setCurrentProject] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const openModal = (imageSrc) => {
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const projects = [
        {
            images: [
                '/BarberShop/home.png',
                '/BarberShop/Agenda.png',
                '/BarberShop/Contactenos.png',
                '/BarberShop/Footer.png',
                '/BarberShop/Navbar.png',
                '/BarberShop/Tipos de Cortes.png'
            ],
            title: "BarberShop Book Website",
            description: "Modern barbershop website with online appointment system, gallery of haircuts, and contact information.",
            link: "https://barber-shop-book.vercel.app/",
            badge: "PERSONAL PROJECT",
            technologies: [
                "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
                "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
                "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
                "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
                "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
                "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"
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
        }
    ];

    const nextImage = () => {
        setCurrentImage(prev =>
            (prev + 1) % projects[currentProject].images.length
        );
    };

    const prevImage = () => {
        setCurrentImage(prev =>
            prev === 0 ? projects[currentProject].images.length - 1 : prev - 1
        );
    };

    const nextProject = () => {
        setCurrentProject(prev => (prev + 1) % projects.length);
        setCurrentImage(0);
    };

    const prevProject = () => {
        setCurrentProject(prev => prev === 0 ? projects.length - 1 : prev - 1);
        setCurrentImage(0);
    };

    return (
        <div className='ProjectsContainer'>
            <h1 className='projects-title'>My Projects</h1>

            {/* Selector de proyectos */}
            <div className="project-selector">
                <button className="project-nav-btn" onClick={prevProject}>‹ Previous Project</button>
                <span className="project-counter">Project {currentProject + 1} of {projects.length}</span>
                <button className="project-nav-btn" onClick={nextProject}>Next Project ›</button>
            </div>

            <div className="project-display">
                <div className="image-carousel">
                    <button className="carousel-btn prev" onClick={prevImage}>‹</button>
                    <img
                        src={projects[currentProject].images[currentImage]}
                        alt={projects[currentProject].title}
                        className="project-image"
                        onClick={() => openModal(projects[currentProject].images[currentImage])} />

                    <button className="carousel-btn next" onClick={nextImage}>›</button>
                    <div className="carousel-indicators">
                        {projects[currentProject].images.map((_, index) => (
                            <span
                                key={index}
                                className={`indicator ${index === currentImage ? 'active' : ''}`}
                                onClick={() => setCurrentImage(index)}
                            ></span>
                        ))}
                    </div>
                </div>

                <div className="project-info">
                    <div className="project-badge">{projects[currentProject].badge}</div>
                    <h2>{projects[currentProject].title}</h2>
                    <p className="project-description">
                        {projects[currentProject].description}
                    </p>
                    <div className="technologies">
                        {projects[currentProject].technologies.map((badge, index) => (
                            <img 
                                key={index}
                                src={badge} 
                                alt="technology badge" 
                                className="tech-badge"
                            />
                        ))}
                    </div>
                    <a
                        href={projects[currentProject].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        View Project →
                    </a>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <img src={modalImage} alt="Full size" className="modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;