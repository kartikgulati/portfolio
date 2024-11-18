import React from 'react'
import Frontend from './Frontend';
import Backend from './Backend';
import './skills.css'
import DesignAndOthers from './DesignAndOthers';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="skills_section_title">Technologies</h2>
      <span className="section_subtitle">My technical expertise.</span>

      <div className="skills_container container grid">

        <Frontend />
        <Backend/>
        <DesignAndOthers/>
        

      </div>
    </section>
  )
}

export default Skills