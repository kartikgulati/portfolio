import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
        
        <div className="about_box">
            <i className="bx bx-award about_icon"></i>
            <h3 className="about_title"> Experience</h3>
            <span className="about_subtitle">2 + years of working Experience</span>
        </div>
        

        <div className="about_box">
        <i className="bx bx-briefcase-alt about_icon"></i>
            <h3 className="about_title">Projects</h3>
            <span className="about_subtitle">10+ projects</span>
        </div>

        <div className="about_box">
        <i className="bx bx-support about_icon"></i>
            <h3 className="about_title">Support</h3>
            <span className="about_subtitle">24x7</span>
        </div>
    </div>
  )
}

export default Info

