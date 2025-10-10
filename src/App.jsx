import { useEffect, useState } from 'react'
import Preloader from './components/Preloader';
import './App.css'
import NavBar from './components/NavBar.jsx'
import AboutMe from './Page/AboutMe.jsx'
import Projects from './Page/Projects.jsx'
import ChatBot from './components/ChatBot.jsx';
import TimeLine from './Page/TimeLine.jsx'
import Skills from './Page/Skills.jsx'
import Contact from './Page/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1700);
    return () => clearTimeout(timeout);
  }, []);
  
  const stars = Array.from({ length: 150 }, (_, index) => ({
    id: index,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    animationDelay: `${Math.random() * 5}s`
  }));
 

  
  const particles = Array.from({ length: 20 }, (_, index) => ({
    id: `particle-${index}`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 200 + 100}px`,
    animationDelay: `${Math.random() * 20}s`,
    duration: `${Math.random() * 10 + 15}s`
  }));

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
    <div className="App">
      <NavBar />
       <ChatBot />
      
      <div className="stars-container">
        {stars.map(star => (
          <span 
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.animationDelay
            }}
          ></span>
        ))}
      </div>
        
      <div className="particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              top: particle.top,
              left: particle.left,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.animationDelay,
              animationDuration: particle.duration
            }}
          ></div>
        ))}
      </div>

      <section id="home"> 
        <div className="main-container">
          <div className='name-container'>
            <p className='greeting'>Hello, I'm</p>
            <div className='name'>
              <h1>Jose Donis Mora Ramirez</h1>
            </div>
            <div className='profession'>
              <h4>Full Stack Developer Junior</h4>
            </div>
          </div>
        </div>
      </section>
      <div>
      <section id="profile">
        <AboutMe />
      </section>
      </div>
      <div>
      <section id="projects">
        <Projects />
      </section>
      </div>
      <div>
      <section id="TimeLine">
        <TimeLine />
      </section>
      </div>
       <div>
      <section id="Skills">
        <Skills />
      </section>
      </div>
         <div>
      <section id="Contact">
        <Contact />
      </section>
      </div>
          <Footer />
    </div>
      )}
    </>
  )
}

export default App