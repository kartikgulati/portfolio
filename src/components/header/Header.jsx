import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

export const Header = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");

      if (!header) {
        return;
      }

      if (window.scrollY >= 80) {
        header.classList.add("scroll_header");
      } else {
        header.classList.remove("scroll_header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const sectionHref = (hash) => (location.pathname === "/" ? hash : `/${hash}`);
  const handleNavClick = (hash) => {
    setActiveNav(hash);
    showMenu(false);
  };
  const handleRouteClick = (route) => {
    setActiveNav(route);
    showMenu(false);
  };


  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <Link to="/" className="nav_logo" onClick={() => handleNavClick("#home")}>
            Kartik Gulati
          </Link>
          <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
            <ul className="nav_list grid">
              <li className="nav_item">
                <a
                  href={sectionHref("#home")}
                  onClick={() => handleNavClick("#home")}
                  className={activeNav === "#home" ? "nav_link active_link" : "nav_link"}
                >
                  <i className="uil uil-estate nav_icon"></i>Home
                </a>
              </li>

              <li className="nav_item">
                <a
                  href={sectionHref("#about")}
                  onClick={() => handleNavClick("#about")}
                  className="nav_link"
                >
                  <i className="uil uil-user nav_icon"></i>About
                </a>
              </li>

              <li className="nav_item">
                <a
                  href={sectionHref("#skills")}
                  onClick={() => handleNavClick("#skills")}
                  className="nav_link"
                >
                  <i className="uil uil-file-alt nav_icon"></i>Skills
                </a>
              </li>

              <li className="nav_item">
                <a
                  href={sectionHref("#services")}
                  onClick={() => handleNavClick("#services")}
                  className="nav_link"
                >
                  <i className="uil uil-briefcase nav_icon"></i>Services
                </a>
              </li>

              {/* <li className="nav_item">
                <a
                  href={sectionHref("#projects")}
                  onClick={() => handleNavClick("#projects")}
                  className="nav_link"
                >
                  <i className="uil uil-scenery nav_icon"></i>Projects
                </a>
              </li> */}

              <li className="nav_item">
                <Link
                  to="/projects"
                  onClick={() => handleRouteClick("/projects")}
                  className={activeNav === "/projects" || location.pathname === "/projects" ? "nav_link active_link" : "nav_link"}
                >
                  <i className="uil uil-apps nav_icon"></i> Projects
                </Link>
              </li>

              <li className="nav_item">
                <a
                  href={sectionHref("#contact")}
                  onClick={() => handleNavClick("#contact")}
                  className="nav_link"
                >
                  <i className="uil uil-message nav_icon"></i>Contact
                </a>
              </li>
            </ul>

            <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
          </div>

          <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;