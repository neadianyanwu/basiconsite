import Hero from '../Hero Section/Hero';
import Nav from '../NavSection/Nav';
import SearchBar from '../SearchBar Section/SearchBar';
import './MainSection.css';
import "../../ExportIcons Section/ExportIcons.css";
import { useState } from "react";

import React from 'react'
import { SVG_ICONS } from '../../ExportIcons Section/ExportIcons';
import { getSubStringName } from '../../utils';
import MainFooter from '../MainFooter section/MainFooter';

const MainSection = (props) => {

  const [svgSize, setSvgSize] =useState('16px');

  return (
    <div className="main-section-container">
      {props.children}

      {/* Nav Section: Starts */}
        <Nav />
      {/*Nav Section: Ends  */}

      {/* Hero Section: Starts */}
        <Hero />
      {/* Hero Section: Ends */}

      {/* SearchBar Section: Starts */}
        <SearchBar />
      {/* SearchBar Section: Ends */}

      {/* Svg Section: Starts */}
        <div className="icons">
          {Array.isArray(SVG_ICONS) && SVG_ICONS ?.map((svgIcon) => {
            const Icon =svgIcon ?.icon;

            return (
              <div className="icons-content">
                <Icon width={svgSize} height={svgSize} />
                <span className="icon-font-size">{getSubStringName(svgIcon.slug, 6)}</span>
              </div>
            )
          })}
        </div>
        {/*Svg Section: Ends  */}

        {/* Footer Section: Starts */}
          <MainFooter />
        {/* Footer Section: Ends */}
    </div>
  )
}

export default MainSection;