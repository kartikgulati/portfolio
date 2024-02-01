import React, { useState } from 'react'
import "./header.css"

export const Header = () => {
    // auto scroll header and change color
    window.addEventListener("scroll", function(){
        const header = this.document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll_header");

        else header.classList.remove("scroll_header")
    });

// toggle menu
    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");


  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav_logo">Kartik Gulati</a>
            <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
                <ul className="nav_list grid">

                    <li className="nav_item">
                        <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === "#home" ? "nav_link active_link" : "nav_link"}>
                            <i className="uil uil-estate nav_icon"></i>Home
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#about" className="nav_link">
                            <i className="uil uil-user nav_icon"></i>About
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#skills" className="nav_link">
                            <i className="uil uil-file-alt nav_icon"></i>Skills
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#services" className="nav_link">
                            <i className="uil uil-briefcase nav_icon"></i>Services
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#portfolio" className="nav_link">
                            <i className="uil uil-scenery nav_icon"></i>Portfolio
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#contact" className="nav_link">
                            <i className="uil uil-message nav_icon"></i>Contact
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav_close" onClick={()=> showMenu(!Toggle)}></i>
            </div>

            <div className="nav_toggle" onClick={()=> showMenu(!Toggle)} >
                <i className="uil uil-apps"></i>
            </div>
           
        </nav>
    </header>
  )
}

export default Header