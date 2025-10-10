import React from 'react';
import './TimeLine.css';
import {
  FaBaby,
  FaUserGraduate,
  FaHospitalUser,
  FaLaptop,
  FaPlaneDeparture,
  FaCode,
  FaHome
} from 'react-icons/fa';

const events = [
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
    description: "Completed certification in office and computer tools.",
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
    title: "FullStack Developer",
    description: "Completed my journey as a Full Stack Developer.",
    icon: <FaCode />,
  },
  {
    year: "2025",
    title: "Back to Costa Rica",
    description: "Returned to my home country.",
    icon: <FaHome />,
  }
];

function TimeLine() {
  return (
    <div className="timeline-section">
      <h2 className="timeline-title">My Timeline</h2>
      <div className="timeline-horizontal">
        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline-event ${index % 2 === 0 ? 'top' : 'bottom'}`}
          >
            <div className="timeline-content">
              <div className="timeline-icon">{event.icon}</div>
              <h3>{event.year}</h3>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>
            <div className="timeline-connector"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimeLine;
