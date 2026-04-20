import React from "react";
import { Link } from "react-router-dom";
import "./testimonials.css";
import { Data } from "./Data";
import { Data_1 } from "./Data";
import ProjectCard from "../projects/ProjectCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="testimonials container section" id="projects">
      <h2 className="testimonial_section_title">Projects</h2>
      <span className="section_subtitle">My recent work</span>

      {/* project list 2 */}
      <Swiper
        className="testimonials_container"
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
        {Data_1.map(({ id_1, name_1, image_1, title_1, description_1, link_1, tech_1 }) => {
          return (
            <SwiperSlide key={id_1}>
              <ProjectCard
                priority
                project={{
                  id: id_1,
                  name: name_1,
                  image: image_1,
                  title: title_1,
                  description: description_1,
                  link: link_1,
                  tech: tech_1,
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Project list 1 */}
      <Swiper
        className="testimonials_container"
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
        {Data.map(({ id, name, image, title, description, link, tech }) => {
          return (
            <SwiperSlide key={id}>
              <ProjectCard
                priority
                project={{
                  id,
                  name,
                  image,
                  title,
                  description,
                  link,
                  tech,
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="projects_ctaWrap">
        <Link to="/projects" className="button projects_ctaButton">
          View All Projects
        </Link>
      </div>
      {/* Project list 1 */}

    </section>
  );
};

export { Testimonials };
export default Testimonials;
