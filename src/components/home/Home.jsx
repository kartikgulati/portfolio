import React from 'react'
import { motion } from "framer-motion";
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import { useEffect } from 'react';

const Home = () => {

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
      <motion.div
        initial={{ opacity: 0, x: -28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Social />
      </motion.div>

      <motion.div
        className="home_img"
        initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      />
      <Data/>

    </div>

    <ScrollDown />
   </div>
   </section>
  )
}

export { Home };
export default Home;
