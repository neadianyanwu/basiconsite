import "./SideBarFooter.css";
import { Basicons, CoffeeTeaAlt, Download, EmailMessageInbox, Link, XCloseDelete } from "react-basicons";
import { useState } from "react";


import React from 'react'

const SideBarFooter = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <footer className="footer">
        <div className="footer-content">
            <p>Licensed under the MIT licence.</p>
            <p>Copyright &copy; 2020-present.</p>
        </div>

        <div className="menu-container">
            {click && <nav className="navbar">
            <ul className="basicons-menu">
                <li className="nav-item"> 
                <a href="#" className="nav-link"> <Download /> Download 326 Icons</a>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link"> <Basicons /> Suggest an Icon</a>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link"> <EmailMessageInbox /> Get updates</a>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link"> <CoffeeTeaAlt /> Buy us a coffee</a>
                </li>
            </ul>
            </nav>}

                <div className="basicons" onClick={handleClick} id="element">
                    {click ? (<XCloseDelete />) : (<Basicons />)}
                </div>
        </div>
    </footer>
  )
}

export default SideBarFooter;