import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const stars = Array.from({ length: 100 }, (_, index) => ({
    id: index,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    animationDelay: `${Math.random() * 5}s`
  }));


  return (

    <div className="App">



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

      <div className="main-container">
        <div className='name-container'>
        <p className='greeting'>Hello, I'm</p>
        <div className='name'><h1>Jose Donis Mora Ramirez</h1></div>
        </div>
        <div className='profession'><h4>Full Stack Developer Junior</h4></div>
      </div>
      </div>


    
  )
}

export default App
