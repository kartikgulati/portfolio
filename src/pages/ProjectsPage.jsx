import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import FilterBar from "../components/FilterBar";
import ProjectCard from "../components/projects/ProjectCard";
import { allProjects } from "../components/testimonials/Data";
import "../components/testimonials/testimonials.css";

const ProjectsPage = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

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

        <motion.div layout className="projects_grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length ? (
              filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  className="testimonial_card projects_gridCard"
                  index={index}
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
      </section>
    </motion.main>
  );
};

export default ProjectsPage;
