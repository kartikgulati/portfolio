import React,{useState} from 'react'
import "./qualification.css";

const Qualification = () => {

    // tab fintions for the these sections

    const [toggleState, setToggelState] = useState(1);

    const toggleTab = (index) =>{
        setToggelState(index);
    }



  return (
    <section className="qualification section">
         <h2 className="qualification_section_title">Qualification</h2>
         <span className="section_subtitle">My achievements </span>

         <div className="qulification_container container">
            <div className="qualification_tabs">
                {/* tabs for education and exp */}
                <div className={toggleState ===1 ? "qualification_button qualification-active button--flex" : "qualification_button  button--flex" }onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification-active qualification_icon"></i>Experience
                </div>

                <div className={toggleState ===2 ? "qualification_button qualification-active button--flex" : "qualification_button  button--flex" }onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification_icon"></i>Education
                </div>
            </div>

            <div className="qualification_sections">

{/* Experience section */}
                <div className={toggleState ===1 ? "qualification_content qualification_content-active":"qualification_content"}>

                    <div className="qualification_data">

                        <div >
                            <h3 className="qualification_title">
                                Web Development
                            </h3>
                            <span className="qualification_subtitle">Conestoga College - Canada</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt">2021-2022</i>
                                </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div >
                            <h3 className="qualification_title">
                                Master of Computer Applications
                            </h3>
                            <span className="qualification_subtitle">India</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt">2018-2020</i>
                                </div>
                        </div>

                        
                    </div>

                    <div className="qualification_data">

                        <div >
                            <h3 className="qualification_title">
                            Bachelor of Computer Applications
                            </h3>
                            <span className="qualification_subtitle">India</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt">2015-2018</i>
                                </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div >
                            <h3 className="qualification_title">
                                Web Dev
                            </h3>
                            <span className="qualification_subtitle">university</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt">2021-present</i>
                                </div>
                        </div>

                        
                    </div> */}
                </div>
                    

{/* Education section */}
                <div className={toggleState ===2 ? "qualification_content qualification_content-active":"qualification_content"}>

                    <div className="qualification_data">

                        <div >
                            <h3 className="qualification_title">
                                MCA
                            </h3>
                            <span className="qualification_subtitle">university</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt">2021-present</i>
                                </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div >
                            <h3 className="qualification_title">
                                Web Dev
                            </h3>
                            <span className="qualification_subtitle">university</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt">2021-present</i>
                                </div>
                        </div>

                        
                    </div>

                    <div className="qualification_data">

                        <div >
                            <h3 className="qualification_title">
                                Masters
                            </h3>
                            <span className="qualification_subtitle">university</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt">2021-present</i>
                                </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div >
                            <h3 className="qualification_title">
                                Web Dev
                            </h3>
                            <span className="qualification_subtitle">university</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt">2021-present</i>
                                </div>
                        </div>

                        
                    </div>
                </div>
            </div>
             
         </div>
    </section>
  )
}

export default Qualification