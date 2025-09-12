import React from 'react'
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import { useEffect } from 'react';

export const Home = () => {

   useEffect(() => {
      const card = document.querySelector('.home_img');
      const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = e.clientX - innerWidth / 2;
        const y = e.clientY - innerHeight / 2;
        const shadowX = (x / innerWidth) * 40;
        const shadowY = (y / innerHeight) * 40;
        if (card) {
          card.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0,0,0,0.6)`;
        }
      };
      document.addEventListener('mousemove', handleMouseMove);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

  return (
   <section className="home section" id="home">
   <div className="home_container container grid">
    <div className="home_content grid">
      <Social />

      <div className="home_img"></div>
      <Data/>

    </div>

    <ScrollDown />
   </div>
   </section>
  )
}
export default Home