import React from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import translations from "../i18n/translations";

function Contact({ language }) {
  const t = translations[language].contact;

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <FaPhone className="contact-icon" />
        <h2 className="contact-title">{t.title}</h2>
        <p className="contact-description">{t.description}</p>
      </div>

      <div className="contact-content">
        <div className="social-icons">
          <a
            href="mailto:jdmora91@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/jose-donis-mora-ramirez-870284321/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/jose.donis.mora.2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/jdmora91"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        <div className="contact-info">
          <p>
            <FaMapMarkerAlt /> San Vito, Coto Brus, Costa Rica
          </p>
          <p className="Phone">
            <FaPhone /> +506 7027 7792
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
