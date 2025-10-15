import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import AboutMe from "./Page/AboutMe.jsx";
import Projects from "./Page/Projects.jsx";
import ChatBot from "./components/ChatBot.jsx";
import TimeLine from "./Page/TimeLine.jsx";
import Skills from "./Page/Skills.jsx";
import Contact from "./Page/Contact.jsx";
import Footer from "./components/Footer.jsx";
import translations from "./i18n/translations";

function App() {
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(true);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(timeout);
  }, []);

  const stars = Array.from({ length: 150 }, (_, index) => ({
    id: index,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    animationDelay: `${Math.random() * 5}s`,
  }));

  const particles = Array.from({ length: 20 }, (_, index) => ({
    id: `particle-${index}`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 200 + 100}px`,
    animationDelay: `${Math.random() * 20}s`,
    duration: `${Math.random() * 10 + 15}s`,
  }));

  const t = translations[language].home;

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="App">
          <NavBar language={language} toggleLanguage={toggleLanguage} />
          <ChatBot language={language} />

          {/* Stars Background */}
          <div className="stars-container">
            {stars.map((star) => (
              <span
                key={star.id}
                className="star"
                style={{
                  top: star.top,
                  left: star.left,
                  width: star.size,
                  height: star.size,
                  animationDelay: star.animationDelay,
                }}
              ></span>
            ))}
          </div>

          {/* Particles Background */}
          <div className="particles">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="particle"
                style={{
                  top: particle.top,
                  left: particle.left,
                  width: particle.size,
                  height: particle.size,
                  animationDelay: particle.animationDelay,
                  animationDuration: particle.duration,
                }}
              ></div>
            ))}
          </div>

          {/* HERO SECTION */}
          <section id="home">
            <div className="main-container">
              <div className="name-container">
                <p className="greeting">{t.greeting}</p>
                <h1 className="name">{t.name}</h1>
                <h4 className="profession">{t.role}</h4>

                {/* === CTA Buttons === */}
                <div className="cta-buttons">
                  <button
                    onClick={() =>
                      document
                        .getElementById("projects")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                    className="cta-btn"
                  >
                    {language === "es" ? "Ver mis proyectos" : "View my projects"}
                  </button>

                  <button
                    onClick={() =>
                      document
                        .getElementById("Contact")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                    className="cta-btn-outline"
                  >
                    {language === "es" ? "Contáctame" : "Contact me"}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* OTHER SECTIONS */}
          <section id="profile">
            <AboutMe language={language} />
          </section>

          <section id="projects">
            <Projects language={language} />
          </section>

          <section id="TimeLine">
            <TimeLine language={language} />
          </section>

          <section id="Skills">
            <Skills language={language} />
          </section>

          <section id="Contact">
            <Contact language={language} />
          </section>

          <Footer language={language} />
        </div>
      )}
    </>
  );
}

export default App;
