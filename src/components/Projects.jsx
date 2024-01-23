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
        <h3 className="projectTitle">Checkr</h3>
        <button className="github">Github</button>
        <button className="demo">Demo</button>
        <div>Skills:</div>
        <div>
          React, Javascript, Html5, Css, Node.js, PostgreSQL, Redux, Axios
        </div>
        <div>
          A collaborative 'To-Do List' application integrates your personal and
          professional tasks. Each list is filled with rewarding activities
          completing tasks earns you points, accompanied by delightful
          incentives such as captivating cat photos or engaging short stories.
          To add a touch of fun, the application even includes a game of snake.
        </div>
      </div>
      <div className="projectBox">
        <h3 className="projectTitle">Vehicle Log</h3>
        <button className="github">Github</button>
        <button className="demo">Demo</button>
        <div>Skills:</div>
        <div>React, Javascript, Html5, Css, Node.js, PostgreSQL, Axios</div>
        <div>
          A React application tailored for car enthusiasts. Easily log in or
          create an account, manage vehicle details, create new entries, and
          track modifications and maintenance history effortlessly. The app
          ensures a secure experience with authentication, user-friendly vehicle
          creation, and convenient logout functionality
        </div>
      </div>
    </div>
  );
};

export default Projects;
