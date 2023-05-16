import { CodeTechDev, Download } from "react-basicons";
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
            <button className="download-button"><a href="#" className="button-link"><Download /> Download all</a></button>
            <button className="doc-button"><a href="#" className="button-link"><CodeTechDev /> Documentation</a></button>
        </div>
    </div>
  )
}

export default Hero;