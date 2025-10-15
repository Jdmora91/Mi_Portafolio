import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import translations from "../i18n/translations";

function Footer({ language }) {
  const t = translations[language].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">
          {language === "en"
            ? '"Life is just a little moment"'
            : '"La vida es solo un pequeño momento"'}
        </h2>

        <p className="footer-quote">{t.text}</p>

        <div className="footer-socials">
          <a
            href="https://github.com/jdmora91"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
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
          <a href="mailto:jdmora91@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} J.D. Software Solutions | {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
