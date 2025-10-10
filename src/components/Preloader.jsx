// src/components/Preloader.jsx
import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="preloader">
      <div className="loader-text">LOADING_PORTFOLIO</div>
      <div className="loader-bar">
        <div className="loader-progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="loader-percent">{progress}%</div>
    </div>
  );
};

export default Preloader;
