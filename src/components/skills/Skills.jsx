import React from 'react'
import Frontend from './Frontend';
import Backend from './Backend';
import './skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="skills_section_title">Skills</h2>
      <span className="section_subtitle">This is my Skills</span>

      <div className="skills_container container grid">

        <Frontend />
        <Backend/>
        

      </div>
    </section>
  )
}

export default Skills