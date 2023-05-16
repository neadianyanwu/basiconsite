import Code from "../Code Section/Code";
import Collect from "../Collect Section/Collect";
import Customize from "../Customize Section/Customize";
import SideBarFooter from "../SideBar Footer Section/SideBarFooter";
import "./SideBar.css";

import React from 'react'

const SideBar = (props) => {
  return (
    <div className="sidebar-container">
      {props.children}

      <Customize />
      <Collect />
      <Code />
      <SideBarFooter />
    </div>
  )
}

export default SideBar;