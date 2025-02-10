import React from 'react'
import { FaXTwitter } from "react-icons/fa6";


export const Social = () => {
  return (
   <div className="home_social">
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
   </div>
  )
}

export default Social