import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
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
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section className="testimonials container section" id="projects">
      <h2 className="testimonial_section_title">Projects</h2>
      <span className="section_subtitle">My recent work</span>

      <LayoutGroup id="homepage-projects">
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
                  className="testimonial_card homepage_projectCard"
                  variant="compact"
                  layoutPrefix="homepage-projects"
                  onSelect={setSelectedProject}
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
                  className="testimonial_card homepage_projectCard"
                  variant="compact"
                  layoutPrefix="homepage-projects"
                  onSelect={setSelectedProject}
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

        <AnimatePresence>
          {selectedProject ? (
            <motion.div
              className="projects_overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="projects_modalShell"
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 12 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.article
                  layoutId={`homepage-projects-card-${selectedProject.id}`}
                  className="projects_modalCard"
                  onClick={(event) => event.stopPropagation()}
                >
                  <motion.img
                    layoutId={`homepage-projects-image-${selectedProject.id}`}
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="projects_modalImage"
                  />

                  <div className="projects_modalContent">
                    <div className="projects_modalTop">
                      <div>
                        <span className="projects_modalEyebrow">
                          {selectedProject.category || selectedProject.tech?.[0] || "Project"}
                        </span>
                        <motion.h2
                          layoutId={`homepage-projects-title-${selectedProject.id}`}
                          className="projects_modalTitle"
                        >
                          {selectedProject.title}
                        </motion.h2>
                        <motion.p
                          layoutId={`homepage-projects-subtitle-${selectedProject.id}`}
                          className="projects_modalSubtitle"
                        >
                          {selectedProject.name}
                        </motion.p>
                      </div>

                      <button
                        type="button"
                        className="projects_modalClose"
                        onClick={() => setSelectedProject(null)}
                      >
                        Close
                      </button>
                    </div>

                    <p className="projects_modalDescription">
                      {selectedProject.description}
                    </p>

                    <div className="projects_modalTech">
                      {selectedProject.tech?.map((item) => (
                        <span key={item} className="projects_modalTechTag">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="projects_modalActions">
                      <a
                        href={selectedProject.link}
                        className="button"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open Project
                      </a>
                      <button
                        type="button"
                        className="projects_secondaryButton"
                        onClick={() => setSelectedProject(null)}
                      >
                        Back to Slider
                      </button>
                    </div>
                  </div>
                </motion.article>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </LayoutGroup>

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
