import React from "react";

const FilterBar = ({ options, selectedFilters, onToggle, onClear }) => {
  return (
    <div className="projects_filterBar">
      <div className="projects_filterIntro">
        <h2 className="section_title">All Projects</h2>
        <span className="section_subtitle">
          Filter by technology stack to explore the full body of work.
        </span>
      </div>

      <div className="projects_filterActions">
        {options.map((option) => {
          const isActive = selectedFilters.includes(option);

          return (
            <button
              key={option}
              type="button"
              className={isActive ? "filter_chip active" : "filter_chip"}
              onClick={() => onToggle(option)}
            >
              {option}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className="projects_clearButton"
        onClick={onClear}
        disabled={!selectedFilters.length}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterBar;
