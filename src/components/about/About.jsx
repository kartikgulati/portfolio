import React from 'react';
import "./about.css";
import AboutImg from "../../assets/kartik222.png";
// import CV from "../../assets/kartikgulati_resume.pdf";

import Info from './Info';
import resume from '../resume';

const About = () => {
  return (
    <section className='about section' id="about">
      <h2 className="about_section_title">About Me</h2>
      <span className="section_subtitle">Let me introduce myself!</span>
      
      <div className="about_container container grid">
        <img src={AboutImg} alt="" className="about_img" />

        <div className="about_data">
          <Info/>
          <p className="about_description"> Web Developer with a proven track record of enhancing project efficiency and delivering high-performance web solutions. Skilled in modern frontend technologies like ReactJS, TypeScript, and Tailwind CSS, alongside backend frameworks such as Node.js and Express.js. Adept at optimizing user experience with creative designs using tools like Adobe Creative Cloud and Figma. Leveraging expertise in database management (MySQL, MongoDB) and a collaborative approach. Download my resume to learn more about my skills and experience.</p>


          
          <a download="" href="https://drive.google.com/uc?export=download&id=1f-aiIv4FwLQlmPa4ArcxVCJ4rs6e2Lr3" className="button button--flex">
            Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(2.56,2.56)"><path d="M34.17969,10.16406c-2.076,0 -3.56445,1.2622 -3.56445,3.5332l0.0332,12.10937c0,3.04 2.1218,4.90625 4.9668,4.90625c2.845,0 5,-1.71 5,-4.75v-11.65625h-1.00195l-0.08984,11.5625c0,2.21 -1.924,3.93945 -3.875,3.93945c-1.951,0 -4.0332,-1.75875 -4.0332,-3.96875l0.0293,-12.22852c0,-1.307 1.43295,-2.48437 2.62695,-2.48437c1.194,0 2.34375,1.14808 2.34375,2.45508v10.47461c0,0 -0.47542,1 -0.98242,1c-0.507,0 -1.14658,-0.35625 -1.01758,-0.90625v-9.8418h-1l-0.0332,9.65625c0,1.38 0.74022,2 2.07422,2c1.334,0 1.95898,-0.7157 1.95898,-2.0957v-10.20508c0,-2.271 -1.35955,-3.5 -3.43555,-3.5zM41.61328,11.30664c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1h18v10.48633c0,5.247 4.26863,9.51367 9.51563,9.51367h10.48438v49.26758c0,4.263 -3.46647,7.73242 -7.73047,7.73242h-43.53516c-4.263,0 -7.73242,-3.46842 -7.73242,-7.73242v-61.53516c0,-4.263 3.46842,-7.73047 7.73242,-7.73047h1.26758c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1h-1.26758c-5.366,0 -9.73242,4.36347 -9.73242,9.73047v61.53516c0,5.366 4.36542,9.73242 9.73242,9.73242h43.53516c5.366,0 9.73047,-4.36642 9.73047,-9.73242v-50.01953c0,-0.265 -0.10497,-0.51903 -0.29297,-0.70703l-20.24805,-20.24805c-0.187,-0.188 -0.44203,-0.29297 -0.70703,-0.29297zM60.61328,13.9668l18.33789,18.33984h-9.82227c-4.695,0 -8.51562,-3.81867 -8.51562,-8.51367zM28.37109,19.50586c-0.12588,-0.02413 -0.261,0.00013 -0.375,0.07813c-2.118,1.44 -3.38281,3.82209 -3.38281,6.37109v52.66211c0,4.239 3.4352,7.68945 7.6582,7.68945h35.68359c4.223,0 7.65816,-3.45045 7.66016,-7.68945v-17.81055c0,-0.276 -0.224,-0.5 -0.5,-0.5c-0.276,0 -0.5,0.224 -0.5,0.5v17.81055c0,3.688 -2.9872,6.68945 -6.6582,6.68945h-35.68359c-3.671,0 -6.6582,-3.00145 -6.6582,-6.68945v-52.66211c0,-2.218 1.09936,-4.29092 2.94336,-5.54492c0.228,-0.155 0.28781,-0.46436 0.13281,-0.69336c-0.0775,-0.1135 -0.19444,-0.18681 -0.32031,-0.21094zM75.11328,47.30664c-0.276,0 -0.5,0.224 -0.5,0.5v3c0,0.276 0.224,0.5 0.5,0.5c0.277,0 0.5,-0.224 0.5,-0.5v-3c0,-0.276 -0.224,-0.5 -0.5,-0.5zM30.11328,51.30664c-0.276,0 -0.5,0.224 -0.5,0.5c0,0.276 0.224,0.5 0.5,0.5h23c0.277,0 0.5,-0.224 0.5,-0.5c0,-0.276 -0.224,-0.5 -0.5,-0.5zM75.11328,52.30664c-0.276,0 -0.5,0.224 -0.5,0.5v6c0,0.276 0.224,0.5 0.5,0.5c0.277,0 0.5,-0.224 0.5,-0.5v-6c0,-0.276 -0.224,-0.5 -0.5,-0.5zM30.11328,58.30664c-0.276,0 -0.5,0.224 -0.5,0.5c0,0.276 0.224,0.5 0.5,0.5h14c0.277,0 0.5,-0.224 0.5,-0.5c0,-0.276 -0.224,-0.5 -0.5,-0.5zM46.11328,58.30664c-0.276,0 -0.5,0.224 -0.5,0.5c0,0.276 0.224,0.5 0.5,0.5h24c0.277,0 0.5,-0.224 0.5,-0.5c0,-0.276 -0.224,-0.5 -0.5,-0.5zM30.11328,65.30664c-0.276,0 -0.5,0.224 -0.5,0.5c0,0.276 0.224,0.5 0.5,0.5h18c0.277,0 0.5,-0.224 0.5,-0.5c0,-0.276 -0.224,-0.5 -0.5,-0.5zM50.11328,65.30664c-0.276,0 -0.5,0.224 -0.5,0.5c0,0.276 0.224,0.5 0.5,0.5h11c0.277,0 0.5,-0.224 0.5,-0.5c0,-0.276 -0.224,-0.5 -0.5,-0.5zM63.11328,65.30664c-0.276,0 -0.5,0.224 -0.5,0.5c0,0.276 0.224,0.5 0.5,0.5h8c0.277,0 0.5,-0.224 0.5,-0.5c0,-0.276 -0.224,-0.5 -0.5,-0.5zM30.11328,72.30664c-0.276,0 -0.5,0.224 -0.5,0.5c0,0.276 0.224,0.5 0.5,0.5h24c0.277,0 0.5,-0.224 0.5,-0.5c0,-0.276 -0.224,-0.5 -0.5,-0.5zM57.11328,72.30664c-0.276,0 -0.5,0.224 -0.5,0.5c0,0.276 0.224,0.5 0.5,0.5h13c0.277,0 0.5,-0.224 0.5,-0.5c0,-0.276 -0.224,-0.5 -0.5,-0.5z"></path></g></g>
</svg> 
            </a>   
          </div>

      </div>
    </section>
    
  );
};

export default About