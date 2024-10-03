import React from "react";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  return (
    <div className="pt-5 md:pt-14 pb-5 md:pb-14" id="projects">
      <h1 className="text-white font-bold text-base sm:text-xl md:text-2xl lg:text-3xl text-center">
        PROJECTS
      </h1>
      <div className="mt-5">
        <ProjectCards />
      </div>
    </div>
  );
};

export default Projects;
