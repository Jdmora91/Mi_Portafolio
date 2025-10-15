import "./LanguageToggle.css";

export default function LanguageToggle({ language, toggleLanguage }) {
  return (
    <button className="lang-toggle" onClick={toggleLanguage}>
      {language === "en" ? "ES" : "EN"}
    </button>
  );
}
