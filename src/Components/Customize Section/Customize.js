import { MoonNight, SunDay } from "react-basicons";
import "./Customize.css";
import $ from "jquery";

import React, { useEffect, useState } from 'react'


const Customize = () => {

  $(document).on('click','ul li', function() {
    $(this).addClass('active').siblings().removeClass('active')
  } )

  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect (() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="customize-container">
      <div className="customize-content">
        <h4>Customize</h4>
        <div className="customize-button-section">
          <div className="button">
            <button onClick={handleDarkModeToggle}>
                {darkMode ? <SunDay /> : <MoonNight /> }
            </button>

            {/* Section: Reset Button */}
              <button className="reset-button">Reset</button>
          </div>
        </div>
      </div>

      <div className="size-container">
        <nav className="container">
        <h4 className="size-header">Size</h4>
        <ul className="label">
          <li className="active">
            <a href="#">16</a>
          </li>
          <li>
            <a href="#">24</a>
          </li>
          <li>
            <a href="#">32</a>
          </li>
        </ul>
        </nav>
        <nav className="container">
        <h4 className="size-header">Stroke</h4>
        <ul className="label">
          <li className="active">
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">1.5</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
        </ul>
        </nav>
    </div>
    
    <div className="hr"></div>
        
    </div>
  )
}

export default Customize;