import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
        
        <div className="about_box">
            <i className="bx bx-award about_icon"></i>
            <h3 className="about_title"> Experience</h3>
            <span className="about_subtitle">3+ Years of Web development Experience</span>
        </div>
        

        <div className="about_box">
        <i className="bx bx-briefcase-alt about_icon"></i>
            <h3 className="about_title">Projects</h3>
            <span className="about_subtitle">10+ Real world projects</span>
        </div>

        <div className="about_box">
        <i className="bx bx-support about_icon"></i>
            <h3 className="about_title">Support</h3>
            <span className="about_subtitle">24x7 & Fast delivery</span>
        </div>
    </div>
  )
}

export default Info

