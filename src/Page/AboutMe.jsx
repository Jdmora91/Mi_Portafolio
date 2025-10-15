import React, { useState } from "react";
import "./AboutMe.css";
import photo from "../assets/jd.jpg";
import translations from "../i18n/translations";

function AboutMe({ language }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const t = translations[language].about;

  return (
    <div className="AboutMe">
      <div className="Presentation">
        <h1 className="Title">{t.title}</h1>

        <div className={`Description ${isExpanded ? "expanded" : ""}`}>
          <p>{t.paragraph1}</p>
          <br />
          <p>{t.paragraph2}</p>
          <br />
          <p>{t.paragraph3}</p>

          {isExpanded && (
            <>
              <br />
              <strong>
                {language === "en"
                  ? "My core values:"
                  : "Mis valores fundamentales:"}
              </strong>{" "}
              {language === "en"
                ? "Discipline, responsibility, and loyalty."
                : "Disciplina, responsabilidad y lealtad."}

              <br />
              <strong>{language === "en" ? "Interests:" : "Intereses:"}</strong>{" "}
              {language === "en"
                ? "Photography, travel, languages, culture, and gaming."
                : "Fotografía, viajes, idiomas, cultura y videojuegos."}

              <br />
              <strong>{language === "en" ? "Goals:" : "Metas:"}</strong>{" "}
              {language === "en"
                ? "Experience life in Nordic countries & Australia; work with Epic Games."
                : "Vivir en países nórdicos y Australia; trabajar con Epic Games."}

              <br />
              <strong>
                {language === "en"
                  ? "Life philosophy:"
                  : "Filosofía de vida:"}
              </strong>{" "}
              {language === "en"
                ? `"Life is just a little moment" — a reminder to make every second count.`
                : `"La vida es solo un pequeño momento" — un recordatorio de aprovechar cada segundo.`}
            </>
          )}

          <button className="ReadMoreBtn" onClick={toggleExpand}>
            {isExpanded
              ? language === "en"
                ? "Less"
                : "Menos"
              : language === "en"
              ? "More..."
              : "Más..."}
          </button>
        </div>
      </div>

      <div className="divider">
        <div className="PhotoContainer">
          <img src={photo} alt="Jose Mora" className="Photo" />
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/jose-donis-mora-ramirez-870284321/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://facebook.com/jose.donis.mora.2025"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://github.com/jdmora91"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
