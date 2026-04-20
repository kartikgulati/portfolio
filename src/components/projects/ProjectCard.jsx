import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({
  project,
  className = "testimonial_card",
  priority = false,
  index = 0,
  layoutPrefix = "",
  onSelect,
  variant = "default",
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

  const cardId = layoutPrefix ? `${layoutPrefix}-card-${project.id}` : undefined;
  const imageId = layoutPrefix ? `${layoutPrefix}-image-${project.id}` : undefined;
  const titleId = layoutPrefix ? `${layoutPrefix}-title-${project.id}` : undefined;
  const subtitleId = layoutPrefix ? `${layoutPrefix}-subtitle-${project.id}` : undefined;

  const handleSelect = () => {
    if (onSelect) {
      onSelect(project);
    }
  };

  const categoryLabel = project.category || project.tech?.[0] || "Project";
  const showTags = variant === "compact" || variant === "default";
  const isCompact = variant === "compact";

  return (
    <motion.article
      layout
      layoutId={cardId}
      className={className}
      onClick={handleSelect}
      whileTap={onSelect ? { scale: 0.985 } : undefined}
      transition={{ duration: 0.25, ease: "easeOut" }}
      {...cardMotionProps}
    >
      <motion.img
        layoutId={imageId}
        src={project.image}
        alt={project.title}
        className="testimonial_img"
      />

      {isCompact ? (
        <div className="project_card-body">
          <motion.span className="project_card-category">
            {categoryLabel}
          </motion.span>
          <motion.h3 layoutId={titleId} className="project_card-title">
            {project.title}
          </motion.h3>
          <motion.p layoutId={subtitleId} className="project_card-description">
            {project.name}
          </motion.p>
          {showTags && project.tech?.length ? (
            <div className="project_card-tech project_card-tech--dark">
              {project.tech.map((item) => (
                <span key={item} className="project_card-techTag project_card-techTag--dark">
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      ) : (
        <div className="testimonial_info">
          <motion.span className="testimonial_category">
            {categoryLabel}
          </motion.span>
          <motion.h3 layoutId={titleId} className="testimonial_title">
            {project.title}
          </motion.h3>
          <motion.h3 layoutId={subtitleId} className="testimonial_name">
            {project.name}
          </motion.h3>
          {showTags && project.tech?.length ? (
            <div className="project_card-tech">
              {project.tech.map((item) => (
                <span key={item} className="project_card-techTag">
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      )}

      {/* <a
        href={project.link}
        className="testimonial_button"
        target="_blank"
        rel="noreferrer"
        onClick={(event) => event.stopPropagation()}
      >
        View
      </a> */}
    </motion.article>
  );
};

export default ProjectCard;
