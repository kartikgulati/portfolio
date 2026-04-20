import React, { useEffect } from 'react'
import "./scrollup.css";

const ScrollUp = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector(".scrollup");
            if (window.scrollY >= 560) scrollUp.classList.add("show_scroll");
            else scrollUp.classList.remove("show_scroll")
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
// eslint-disable-next-line jsx-a11y/anchor-is-valid
<a href="#" className="scrollup" >
    <i className="uil uil-arrow-up scrollup_icon"></i>
</a>
  )
}

export default ScrollUp