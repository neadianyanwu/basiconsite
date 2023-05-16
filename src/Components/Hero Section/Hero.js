// import { CodeTechDev } from "react-basicons";
import "./Hero.css";

import React from 'react'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-content">
            <h2>Basic icons for product design & development</h2>
            <p className="sub-content">326+ icons . Growing collection . 24 x 24 pixel perfect</p>
        </div>

        <div className="button-container">
          <a href="https://storage.googleapis.com/basicons-bucket/svg-zip" target="_blank" className="button-link">
            <button className="download-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 14V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V14" stroke="#fff" stroke-width="1.5"
                  strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12 3V17M12 17L7 11.5555M12 17L17 11.5556" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              <span className="span-button">Download all</span>
            </button></a>
          <a href="https://github.com/solomon-fibonacci/react-basicons#react-basicons" target="_blank" className="button-link">
            <button className="doc-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="htpp://www.w3.org/2000/svg">
                <path d="M7 8L3 12L7 16" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M17 8L21 12L17 16" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M14 4L9.8589 19.4548" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
                <span className="span-button"> Documentation</span>
            </button></a>
        </div>
    </div>
  )
}

export default Hero;