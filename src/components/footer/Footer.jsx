import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
      <div className="footer_container container">
        <h1 className="footer_title">Kartik gulati</h1>

        <ul className="footer_list">

          <li  className="footer_link">
            <a href="#about" className="footer_link">About</a>
          </li>

          <li  className="footer_link">
            <a href="#portfolio" className="footer_link">Projects</a>
          </li>

          <li  className="footer_link">
            <a href="#testemonials" className="footer_link">Testimonial</a>
          </li>
        </ul>
  {/* social icon */}
        <div className="footer_social">
         

        <ul className="footer_social">

            <a href="https://www.instagram.com/" className="footer_social-link" target='_blank'  rel="noreferrer">
            <i className='uil uil-instagram'></i>
            </a>

            <a href="https://www.instagram.com/" className="footer_social-link" target='_blank'  rel="noreferrer">
            <i className='uil uil-github-alt'></i>
            </a>

            <a href="https://www.instagram.com/" className="footer_social-link" target='_blank'  rel="noreferrer">
            <i className='uil uil-instagram'></i>
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