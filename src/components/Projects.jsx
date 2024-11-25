import React from "react";
import { FaFolderOpen } from "react-icons/fa";
import "../css/projects.css";

const projects = [
  {
    title: "DC Landworks",
    github: "https://github.com/JacobFoote01/DC_Landworks",
    skills: "React, Javascript, Html5, Css",
    description: `A modern and responsive website designed for a landscaping company, showcasing services, portfolio, and contact information with a user-friendly interface.`,
  },
  {
    title: "Mountain Skies Construction",
    github: "https://www.mountainskiesconstruction.com",
    skills: "Css, Wordpress",
    description: `A multi-page website built for a construction company, seamlessly blending stunning visuals with their story. Designed to provide a smooth user experience, it highlights services, projects, and company values while ensuring intuitive navigation and engaging content.`,
  },
  {
    title: "Checkr",
    github: "https://github.com/paulG1218/DM-Project3.git",
    skills: "React, Javascript, Html5, Css, Node.js, PostgreSQL, Redux, Axios",
    description: `A collaborative 'To-Do List' application integrates your 
    personal and professional tasks. Completing tasks earns you points, with 
    delightful incentives like cat photos or engaging short stories. Includes 
    a game of snake for fun.`,
  },
  {
    title: "Vehicle Log",
    github: "https://github.com/JacobFoote01/Project-2.git",
    skills: "React, Javascript, Html5, Css, Node.js, PostgreSQL, Axios",
    description: `A React application tailored for car enthusiasts. Easily log in, 
    manage vehicle details, and track modifications and maintenance history 
    effortlessly. Secure experience with authentication and user-friendly features.`,
  },
  {
    title: "Task List",
    github: "https://github.com/JacobFoote01/task_list.git",
    skills: "React, Javascript, Html5, Css, Node.js",
    description: `A "to-do list" style application with full CRUD capabilities. 
    Organizing tasks is a breeze with features like an estimated time input, 
    enhancing task management efficiency.`,
  },
  {
    title: "Movie Ratings",
    github: "https://github.com/JacobFoote01/MovieRatings1",
    skills: "React, Javascript, Html5, Css, Node.js",
    description: `A collaborative React application to choose and rate movies. 
    Share your ratings with friends and explore their opinions.`,
  },
];

const Projects = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="projectsContainer">
      <h1 className="projectsTitle">
        <FaFolderOpen /> Projects
      </h1>
      {projects.map((project, index) => (
        <div className="projectBox" key={index}>
          <h3 className="projectTitle">{project.title}</h3>
          <div className="buttonCont">
            <button
              className="github"
              onClick={() => handleClick(project.github)}
            >
              Github
            </button>
          </div>
          <hr id="line" />
          <div className="skillsUsed">Skills:</div>
          <div className="skillList">{project.skills}</div>
          <hr id="line" />
          <div className="skillsUsed">Description:</div>
          <div className="description">{project.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

