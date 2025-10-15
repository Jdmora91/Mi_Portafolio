import React from "react";
import "./TimeLine.css";
import {
  FaBaby,
  FaUserGraduate,
  FaHospitalUser,
  FaLaptop,
  FaPlaneDeparture,
  FaCode,
  FaHome,
} from "react-icons/fa";
import translations from "../i18n/translations";

function TimeLine({ language }) {
  const t = translations[language].timeline;

  const events =
    language === "en"
      ? [
          {
            year: "1991",
            title: "Born",
            description: "I was born in Costa Rica.",
            icon: <FaBaby />,
          },
          {
            year: "2008",
            title: "High School Graduate",
            description: "Graduated from high school.",
            icon: <FaUserGraduate />,
          },
          {
            year: "2015",
            title: "Medical Records Technician",
            description: "Worked in healthcare document management.",
            icon: <FaHospitalUser />,
          },
          {
            year: "2020",
            title: "Office Technician",
            description: "Certified in office and computer tools.",
            icon: <FaLaptop />,
          },
          {
            year: "2022",
            title: "Moved to USA",
            description: "Relocated to the United States.",
            icon: <FaPlaneDeparture />,
          },
          {
            year: "2025",
            title: "Full Stack Developer",
            description: "Completed my journey as a developer.",
            icon: <FaCode />,
          },
          {
            year: "2025",
            title: "Back to Costa Rica",
            description: "Returned to my home country.",
            icon: <FaHome />,
          },
        ]
      : [
          {
            year: "1991",
            title: "Nacimiento",
            description: "Nací en Costa Rica.",
            icon: <FaBaby />,
          },
          {
            year: "2008",
            title: "Graduado de Secundaria",
            description: "Finalicé mis estudios de colegio.",
            icon: <FaUserGraduate />,
          },
          {
            year: "2015",
            title: "Técnico en Registros Médicos",
            description: "Trabajé en gestión documental de salud.",
            icon: <FaHospitalUser />,
          },
          {
            year: "2020",
            title: "Técnico en Oficina",
            description: "Certificación en herramientas de oficina y cómputo.",
            icon: <FaLaptop />,
          },
          {
            year: "2022",
            title: "Mudanza a EE.UU.",
            description: "Me trasladé a los Estados Unidos.",
            icon: <FaPlaneDeparture />,
          },
          {
            year: "2025",
            title: "Desarrollador Full Stack",
            description: "Completé mi formación como desarrollador.",
            icon: <FaCode />,
          },
          {
            year: "2025",
            title: "De regreso a Costa Rica",
            description: "Volví a mi país natal.",
            icon: <FaHome />,
          },
        ];

  return (
    <div className="timeline-section">
      <h2 className="timeline-title">{t.title}</h2>
      <p className="timeline-subtitle">{t.description}</p>

      <div className="timeline-horizontal">
        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline-event ${index % 2 === 0 ? "top" : "bottom"}`}
          >
            <div className="timeline-content">
              <div className="timeline-icon">{event.icon}</div>
              <h3>{event.year}</h3>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimeLine;
