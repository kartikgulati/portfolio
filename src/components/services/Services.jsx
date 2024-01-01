import React,{useState} from 'react'
import "./services.css";

const Services = () => {
// close function

const [toggleState, setToggelState] = useState(0);

    const toggleTab = (index) =>{
        setToggelState(index);
    }




  return (
    <section className="services section" id='services'>
        <h2 className="section_title">Services</h2>
      <span className="section_subtitle">Services I Offer</span>

        <div className="services_container container grid">
            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">test 1<br></br>test</h3>
                </div>

                <span className="services_button" onClick={()=>toggleTab(1)}>view more<i className="uil uil-arrow-right services_button-icon"></i></span>


                    <div className= {toggleState ===1 ? "services_modal activate_modal":"services_modal" }>

                <div className="services_modal-content">
                    <i className="uil uil-times services_modal-close" onClick={()=>toggleTab(0)}></i>
                    <h3 className="services_modal-title">Test</h3>
                    <p className="services_modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laudantium incidunt explicabo molestiae voluptate odio quia inventore, non est aut modi assumenda doloremque nulla temporibus nostrum repudiandae recusandae doloribus sint.</p>

                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">test test test test test test</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">test test test test test test</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">test test test test test test</p>
                        </li>


                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">test test test test test test</p>
                        </li>
                    </ul>
                </div>
                </div>

            </div>


            {/* 2nd services */}

            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">test 2<br></br>test</h3>
                </div>

                <span className="services_button" onClick={()=>toggleTab(2)}>view more<i className="uil uil-arrow-right services_button-icon"></i></span>


                    <div className= {toggleState ===2 ? "services_modal activate_modal":"services_modal" }>

                <div className="services_modal-content">
                    <i className="uil uil-times services_modal-close" onClick={()=>toggleTab(0)}></i>
                    <h3 className="services_modal-title">Test</h3>
                    <p className="services_modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laudantium incidunt explicabo molestiae voluptate odio quia inventore, non est aut modi assumenda doloremque nulla temporibus nostrum repudiandae recusandae doloribus sint.</p>

                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">test test test test test test</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">test dxfbdfbvtest test test test test</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">test test test test test test</p>
                        </li>


                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">test test test test test test</p>
                        </li>
                    </ul>
                </div>
                </div>

            </div>

            {/* 3rd service */}

            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">test 3<br></br>test</h3>
                </div>

                <span className="services_button" onClick={()=>toggleTab(3)}>view more<i className="uil uil-arrow-right services_button-icon"></i></span>


                    <div className= {toggleState ===3 ? "services_modal activate_modal":"services_modal" }>

                <div className="services_modal-content">
                    <i className="uil uil-times services_modal-close" onClick={()=>toggleTab(0)}></i>
                    <h3 className="services_modal-title">Test</h3>
                    <p className="services_modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laudantium incidunt explicabo molestiae voluptate odio quia inventore, non est aut modi assumenda doloremque nulla temporibus nostrum repudiandae recusandae doloribus sint.</p>

                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">test3 test test test test test</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">test dxfbdfbvtest test test test test</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">test test test test test test</p>
                        </li>


                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">test test test test test test</p>
                        </li>
                    </ul>
                </div>
                </div>

            </div>

           
        </div>

    </section>
  )
}
 
export default Services