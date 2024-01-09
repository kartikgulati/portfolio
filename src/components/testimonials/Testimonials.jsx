import React from 'react'
import './testimonials.css';
import {Data} from "./Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className="testimonials container section">
         <h2 className="section_title">Testimonial Section</h2>
         <span className="section_subtitle">What my clients say</span>

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
             slidesPerView: 2,
             spaceBetween: 40,
           },
           
         }}
         modules={[Pagination]}
         
         >
            {Data.map(({id,name,image,title,description}) => {
                return(
                    <SwiperSlide className='testimonial_card' key={id}>
                        <img src={image} alt="" className="testimonial_img" />
                        <h3 className='testimonial_name'>{name}</h3>
                        <h3 className='testimonial_title'>{title}</h3>
                        <p className="testimonial_description">{description}</p>
                    </SwiperSlide>
                );
            })}
         </Swiper>


         
    </section>
  )
}

export default Testimonials