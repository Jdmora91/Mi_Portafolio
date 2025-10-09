import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import AboutMe from './Page/AboutMe.jsx'
import Projects from './Page/Projects.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  //stars 
  const stars = Array.from({ length: 150 }, (_, index) => ({
    id: index,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    animationDelay: `${Math.random() * 5}s`
  }));
 

  // Background particles
  const particles = Array.from({ length: 20 }, (_, index) => ({
    id: `particle-${index}`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 200 + 100}px`,
    animationDelay: `${Math.random() * 20}s`,
    duration: `${Math.random() * 10 + 15}s`
  }));

  return (
    <div className="App">
      <NavBar />
      
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

    </div>
  )
}

export default App