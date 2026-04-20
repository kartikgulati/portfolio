import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import FilterBar from "../components/FilterBar";
import ProjectCard from "../components/projects/ProjectCard";
import { allProjects } from "../components/testimonials/Data";
import "../components/testimonials/testimonials.css";

const ProjectsPage = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const techOptions = useMemo(
    () =>
      [...new Set(allProjects.flatMap((project) => project.tech || []))].sort(
        (a, b) => a.localeCompare(b)
      ),
    []
  );

  const filteredProjects = useMemo(() => {
    if (!selectedFilters.length) {
      return allProjects;
    }

    return allProjects.filter((project) =>
      selectedFilters.every((filter) => project.tech?.includes(filter))
    );
  }, [selectedFilters]);

  const handleToggleFilter = (filter) => {
    setSelectedFilters((current) =>
      current.includes(filter)
        ? current.filter((item) => item !== filter)
        : [...current, filter]
    );
  };

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
    <motion.main
      className="projects_page section"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <section className="container">
        <FilterBar
          options={techOptions}
          selectedFilters={selectedFilters}
          onToggle={handleToggleFilter}
          onClear={() => setSelectedFilters([])}
        />

        <div className="projects_pageHeader">
          <p className="projects_pageMeta">
            Showing {filteredProjects.length} of {allProjects.length} projects
          </p>
          <Link to="/" className="projects_backLink">
            Back to Home
          </Link>
        </div>

        <LayoutGroup id="projects-page">
          <motion.div layout className="projects_grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.length ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    className="testimonial_card projects_gridCard"
                    index={index}
                    layoutPrefix="projects-page"
                    onSelect={setSelectedProject}
                    variant="compact"
                  />
                ))
              ) : (
                <motion.div
                  key="empty-state"
                  layout
                  className="projects_emptyState"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                >
                  <h3>No projects match the selected filters.</h3>
                  <p>Try removing a few technologies to broaden the result set.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

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
                    layoutId={`projects-page-card-${selectedProject.id}`}
                    className="projects_modalCard"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <motion.img
                      layoutId={`projects-page-image-${selectedProject.id}`}
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
                            layoutId={`projects-page-title-${selectedProject.id}`}
                            className="projects_modalTitle"
                          >
                            {selectedProject.title}
                          </motion.h2>
                          <motion.p
                            layoutId={`projects-page-subtitle-${selectedProject.id}`}
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
                          className="projects_secondaryButton "
                          onClick={() => setSelectedProject(null)}
                        >
                          Back to Grid
                        </button>
                      </div>
                    </div>
                  </motion.article>
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </LayoutGroup>
      </section>
    </motion.main>
  );
};

export default ProjectsPage;
