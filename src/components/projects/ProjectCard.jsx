import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({
  project,
  className = "testimonial_card",
  priority = false,
  index = 0,
}) => {
  const cardMotionProps = priority
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 16 },
        transition: {
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
          delay: index * 0.05,
        },
      };

  return (
    <motion.article
      layout
      className={className}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 22px 48px rgba(15, 23, 42, 0.16)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      {...cardMotionProps}
    >
      <img src={project.image} alt={project.title} className="testimonial_img" />

      <div className="testimonial_info">
        <h3 className="testimonial_title">{project.title}</h3>
        <h3 className="testimonial_name">{project.name}</h3>
        {project.tech?.length ? (
          <div className="project_card-tech">
            {project.tech.map((item) => (
              <span key={item} className="project_card-techTag">
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <a
        href={project.link}
        className="testimonial_button"
        target="_blank"
        rel="noreferrer"
      >
        View
      </a>
    </motion.article>
  );
};

export default ProjectCard;
