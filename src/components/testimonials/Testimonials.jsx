import React from 'react'
import './testimonials.css';
import {Data} from "./Data";
import { Data_1 } from './Data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className="testimonials container section" id= "projects">
         <h2 className="testimonial_section_title">Projects</h2>
         <span className="section_subtitle">My recent work</span>
         
         

         {/* project list 2 */}
            
         <Swiper className="testimonials_container"
         loop={true}
         grabCursor={true}
         slidesPerView={1}
         spaceBetween={24}
         pagination={{
           clickable: true,
         }}
         breakpoints={{
           576: {
             slidesPerView:2,
             
           },
           768: {
             slidesPerView: 2,
             spaceBetween: 40,
           },
           
         }}
         modules={[Pagination]}
         
         >
            {Data_1.map(({id_1,name_1,image_1,title_1,description_1,link_1}) => {
                return(
                    <SwiperSlide className='testimonial_card' key={id_1}>
                        <img src={image_1} alt="" className="testimonial_img" />
                        
                        <div className="testimonial_info">
                        <h3 className='testimonial_name'>{name_1}</h3>
                        <h3 className='testimonial_title'>{title_1}</h3>
                        <p className="testimonial_description">{description_1}</p>
                        </div>
                        <a href={link_1} className="testimonial_button">view</a>
                    </SwiperSlide>
                );
            })}
            
         </Swiper>

          {/* Project list 1 */}
          <Swiper className="testimonials_container"
         loop={true}
         grabCursor={true}
         slidesPerView={1}
         spaceBetween={24}
         pagination={{
           clickable: true,
         }}
         breakpoints={{
           576: {
             slidesPerView: 2,
             
           },
           768: {
             slidesPerView: 3,
             spaceBetween: 40,
           },
           
         }}
         modules={[Pagination]}
         
         >
            {Data.map(({id,name,image,title,description,link}) => {
                return(
                    <SwiperSlide className='testimonial_card' key={id}>
                        <img src={image} alt="" className="testimonial_img" />
                        
                        <div className="testimonial_info">
                        <h3 className='testimonial_name'>{name}</h3>
                        <h3 className='testimonial_title'>{title}</h3>
                        <p className="testimonial_description">{description}</p>
                        </div>
                        <a href={link} className="testimonial_button">view</a>
                    </SwiperSlide>
                );
            })}
            
         </Swiper> {/* Project list 1 */}
         


         
    </section>
  )
}

export default Testimonials