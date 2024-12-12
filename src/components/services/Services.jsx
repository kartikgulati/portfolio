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
        <h2 className="services_section_title">Services</h2>
      <span className="section_subtitle">Services I Offer</span>

        <div className="services_container container grid" >

            {/* 1st services */}
            <div className="services_content "  >
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">Portfolio<br></br>Design</h3>
                </div>

                <span className="services_button" onClick={()=>toggleTab(1)}>view more<i className="uil uil-arrow-right services_button-icon"></i></span>


                    <div className= {toggleState ===1 ? "services_modal activate_modal":"services_modal" }>

                <div className="services_modal-content">
                    <i className="uil uil-times services_modal-close" onClick={()=>toggleTab(0)}></i>
                    <h3 className="services_modal-title">Portfolio Design</h3>
                    <p className="services_modal-description">Showcase your talents and achievements with a professionally crafted portfolio that sets you apart. Portfolio design services offer tailored layouts, modern aesthetics, and user-friendly navigation to present your work in the best light. Whether you're a creative professional, entrepreneur, or job seeker, we ensure your portfolio highlights your strengths, tells your story, and creates a lasting impression. Let us help you create a compelling visual and digital representation of your journey to success.</p>

                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Personalized Themes</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Versatility</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Responsive Design</p>
                        </li>


                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">SEO Optimization</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Ongoing Support</p>
                        </li>
                    </ul>
                </div>
                </div>

            </div>


            {/* 2nd services */}

            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">Website<br></br>Development/Design</h3>
                </div>

                <span className="services_button" onClick={()=>toggleTab(2)}>view more<i className="uil uil-arrow-right services_button-icon"></i></span>


                    <div className= {toggleState ===2 ? "services_modal activate_modal":"services_modal" }>

                <div className="services_modal-content">
                    <i className="uil uil-times services_modal-close" onClick={()=>toggleTab(0)}></i>
                    <h3 className="services_modal-title">Website<br></br>Development    / Design</h3>
                    <p className="services_modal-description">Bring your online presence to life with our professional website development and design services. We specialize in creating visually stunning, highly functional, and user-friendly websites tailored to your unique needs. From sleek corporate sites to vibrant e-commerce platforms, our designs ensure seamless navigation, responsiveness, and fast load times. Let us help you captivate your audience and achieve your digital goals with a website that stands out from the competition.</p>

                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Custom Designs</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Mobile Optimization</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">E-Commerce Integration</p>
                        </li>


                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">SEO-Friendly Structure</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Secure Hosting & Website Maintenance</p>
                        </li>
                    </ul>
                </div>
                </div>

            </div>

            {/* 3rd service */}

            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">UI/UX | Graphics<br></br>Design</h3>
                </div>

                <span className="services_button" onClick={()=>toggleTab(3)}>view more<i className="uil uil-arrow-right services_button-icon"></i></span>


                    <div className= {toggleState ===3 ? "services_modal activate_modal":"services_modal" }>

                <div className="services_modal-content">
                    <i className="uil uil-times services_modal-close" onClick={()=>toggleTab(0)}></i>
                    <h3 className="services_modal-title">UI/UX | Graphics Design</h3>
                    <p className="services_modal-description">Transform ideas into captivating visuals with our UI/UX and graphic design services. We craft intuitive user interfaces and memorable graphic designs that combine aesthetics with functionality, enhancing user experiences and driving engagement. Whether it's designing a mobile app, website, or branding materials, our designs are tailored to meet your goals and leave a lasting impact. Let us bring your vision to life with creativity and precision.</p>

                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">User-Centered Design</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Wireframing and Prototyping</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Brand Consistency</p>
                        </li>


                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Interactive Elements</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Usability Testing</p>
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