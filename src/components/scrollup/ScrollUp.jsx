import React from 'react'
import "./scrollup.css";

const ScrollUp = () => {
    window.addEventListener("scroll", function(){
        const scrollUp = this.document.querySelector(".scrollup");
        if (this.scrollY >= 560) scrollUp.classList.add("show_scroll");

        else scrollUp.classList.remove("show_scroll")
    });
  return (
// eslint-disable-next-line jsx-a11y/anchor-is-valid
<a href="#" className="scrollup" >
    <i className="uil uil-arrow-up scrollup_icon"></i>
</a>
  )
}

export default ScrollUp