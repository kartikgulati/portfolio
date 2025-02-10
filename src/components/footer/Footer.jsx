import React from 'react'
import "./footer.css";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer>
      <div className="footer_container container">
        <h1 className="footer_title">Kartik Gulati</h1>

        <ul className="footer_list">

          <li  className="footer_link">
            <a href="#about" className="footer_link">About</a>
          </li>

          <li  className="footer_link">
            <a href="#skills" className="footer_link">Skills</a>
          </li>

          

          <li  className="footer_link">
            <a href="#services" className="footer_link">Services</a>
          </li>

          <li  className="footer_link">
            <a href="#projects" className="footer_link">Projects</a>
          </li>

          <li  className="footer_link">
            <a href="#contact" className="footer_link">Contact</a>
          </li>
        </ul>
  {/* social icon */}
        <div className="footer_social">
         

        <ul className="footer_social">

            <a href="https://www.linkedin.com/in/kartik-gulati-a5636b17a/" className="home_social-icon" target='_blank'  rel="noreferrer">
        <i className='uil uil-linkedin-alt'></i>
       </a>

       <a href="https://github.com/kartikgulati" className="home_social-icon" target='_blank'  rel="noreferrer">
       <i className='uil uil-github-alt'></i>
       </a>

       

       <a href="https://x.com/KartikGulati14" className="home_social-icon" target='_blank'  rel="noreferrer">
       <FaXTwitter />
       </a>

       <a href="https://www.instagram.com/kartik_gulati06/" className="home_social-icon" target='_blank'  rel="noreferrer">
       <i className='uil uil-instagram'></i>
       </a>

       <a href="https://www.snapchat.com/" className="home_social-icon" target='_blank'  rel="noreferrer">
       <i className='uil uil-snapchat-alt'></i>
       </a>

       <a href="mailto:kartikgulati19@gmail.com" className="home_social-icon" target='_blank'  rel="noreferrer">
       <i className='uil uil-envelope'></i>
       </a>
            </ul>
        </div>
          <span className="footer_copy">&#169;KARTIK GULATI. All rights reserved.</span>
      </div>
    </footer>
    </div>
  )
};

export default Footer