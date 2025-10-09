import React, { useState } from 'react'
import './AboutMe.css'
import photo from '../assets/jd.jpg'

function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="AboutMe">
      <div className="Presentation">
        <h1 className='Title'>About Me</h1>
        
        <div className={`Description ${isExpanded ? 'expanded' : ''}`}>
          Howdy! My name is Jose Mora, but you can call me Jose. I'm a 34-year-old Costa Rican developer who loves creating meaningful digital experiences.
          
          <br /><br />
          
          My journey into tech is anything but conventional. After dedicating nine years to healthcare (2013-2022), I took a leap of faith and moved to the United States in 2022 to pursue my passion for programming. There, I immersed myself in coding at 4Geeks Academy, completing an intensive 8-month Full Stack Developer program.
          
          <br /><br />
          
          I returned to Costa Rica in 2025 to fully commit to my programming career. What drives me is the belief that coding isn't just a job—it's a craft I'm passionate about perfecting every day.
          
          {isExpanded && (
            <>
              <br /><br />
              
              <strong>My core values:</strong> Discipline, responsibility, and above all, <strong>LOYALTY</strong>.
              
              <br />
              
    
              <strong>Interests:</strong> Photography, travel, language learning, cultural exploration, and gaming
              <br />
              <strong>Goals:</strong> Experience life in Nordic countries & Australia, become an Epic Games developer

              <br />

              <strong>Life philosophy:</strong> "Life is just a little moment" — a reminder to make every second count.

              <br />

              I'm confident that any team I join will gain not just a developer, but a deeply committed and passionate collaborator.
              
              <div className="ContactSection">
                <h3 className="ContactTitle">Get in touch!</h3>
                <p>Let's create something amazing together</p>
              </div>
            </>
          )}
          
          <button 
            className="ReadMoreBtn"
            onClick={toggleExpand}
          >
            {isExpanded ? 'Less' : 'More...'}
          </button>
        </div>
      </div>
      <div className="divider">
      <div className="PhotoContainer">
        <img src={photo} alt="Jose Mora" className='Photo' />
      </div>
        <div className="social-links">
    <a href="https://www.linkedin.com/in/jose-donis-mora-ramirez-870284321/" target="_blank" rel="noopener noreferrer" className="social-link">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="https://facebook.com/jose.donis.mora.2025" target="_blank" rel="noopener noreferrer" className="social-link">
      <i className="fab fa-facebook"></i>
    </a>
    <a href="https://github.com/jdmora91" target="_blank" rel="noopener noreferrer" className="social-link">
      <i className="fab fa-github"></i>
    </a>
    </div>
  </div>
</div>

  )
}

export default AboutMe