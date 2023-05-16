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
    <div className="customize small-only mobile-aside">
      <div className="customize container">
        <div className="customize top">
          <span className="span-content">
            <h4>Customize</h4>
          </span>
          <div className="customize-button-section">
            <div className="button">
              <button onClick={handleDarkModeToggle}>
                {darkMode ? <SunDay /> : <MoonNight /> }
              </button>

              {/* Section: Reset Button */}
              <button className="reset-button small secondary">
                <span className="span-reset">Reset</span>
              </button>
            </div>
          </div>
        </div>

        <div className="metrics body">
          <div className="metrics-container radio-groups">
            <div className="metrics-container metrics config">
              <div className="metrics-content container ">
                <label className="label">Size</label>
                  <div className="label body">
                    <div className="size option">
                      <div className="size background">16</div>
                    </div>
                    <div className="size option active">
                      <div className="size background">24</div>
                    </div>
                    <div className="size option">
                      <div className="size background">32</div>
                    </div>
              </div>
            </div>
          </div>
          <div className="stroke weight config">
            <div className="metrics-container container">
              <label className="label">Stroke</label>
                <label className="label body">
                  <div className="size option">
                    <div className="size background">1</div>
                  </div>
                  <div className="size option active">
                    <div className="size background">1.5</div>
                  </div>
                  <div className="size option">
                    <div className="size background">2</div>
                  </div>
                </label>
            </div>
          </div>
        </div>
        </div>
      </div>
  </div>
  )
}

export default Customize;