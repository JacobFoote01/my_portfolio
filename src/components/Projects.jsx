import React from "react";
import { FaFolderOpen } from "react-icons/fa";
import "../css/projects.css";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <h1 className="projectsTitle">
        <FaFolderOpen /> Projects
      </h1>
      <div className="projectBox">
        <h3>Project Title</h3>
        <button>Github</button>
        <button>Demo</button>
        <div>Skills used</div>
        <div>Description of Project</div>
      </div>
    </div>
  );
};

export default Projects;
