import React from "react";
import { FaFolderOpen } from "react-icons/fa";
import "../css/projects.css";

const Projects = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="projectsContainer">
      <h1 className="projectsTitle">
        <FaFolderOpen /> Projects
      </h1>
      <div className="projectBox">
        <h3 className="projectTitle">Checkr</h3>
        <div className="buttonCont">
          <button
            className="github"
            onClick={() =>
              handleClick("https://github.com/paulG1218/DM-Project3.git")
            }
          >
            Github
          </button>
        </div>
        <hr id="line" />
        <div className="skillsUsed">Skills:</div>
        <div className="skillList">
          React, Javascript, Html5, Css, Node.js, PostgreSQL, Redux, Axios
        </div>
        <hr id="line" />
        <div className="skillsUsed">Description:</div>
        <div className="description">
          A collaborative 'To-Do List' application integrates your personal and
          professional tasks. Each list is filled with rewarding activities
          completing tasks earns you points, accompanied by delightful
          incentives such as captivating cat photos or engaging short stories.
          To add a touch of fun, the application even includes a game of snake.
        </div>
      </div>
      <div className="projectBox">
        <h3 className="projectTitle">Vehicle Log</h3>
        <div className="buttonCont">
          <button
            className="github"
            onClick={() =>
              handleClick("https://github.com/JacobFoote01/Project-2.git")
            }
          >
            Github
          </button>
        </div>
        <hr id="line" />
        <div className="skillsUsed">Skills:</div>
        <div className="skillList">
          React, Javascript, Html5, Css, Node.js, PostgreSQL, Axios
        </div>
        <hr id="line" />
        <div className="skillsUsed">Description:</div>
        <div className="description">
          A React application tailored for car enthusiasts. Easily log in or
          create an account, manage vehicle details, create new entries, and
          track modifications and maintenance history effortlessly. The app
          ensures a secure experience with authentication, user-friendly vehicle
          creation, and convenient logout functionality
        </div>
      </div>
      <div className="projectBox">
        <h3 className="projectTitle">Task List</h3>
        <div className="buttonCont">
          <button
            className="github"
            onClick={() =>
              handleClick("https://github.com/JacobFoote01/task_list.git")
            }
          >
            Github
          </button>
        </div>
        <hr id="line" />
        <div className="skillsUsed">Skills:</div>
        <div className="skillList">React, Javascript, Html5, Css, Node.js </div>
        <hr id="line" />
        <div className="skillsUsed">Description:</div>
        <div className="description">
          A "to-do list" style application. Has all CRUDE capabilities. Making
          and organizing tasks such a breeze. Included an estimated time input
          to further enhance the experience, providing a user-friendly interface
          for efficient task management
        </div>
      </div>
      <div className="projectBox">
        <h3 className="projectTitle">Movie Ratings</h3>
        <div className="buttonCont">
          <button
            className="github"
            onClick={() =>
              handleClick("https://github.com/JacobFoote01/MovieRatings1")
            }
          >
            Github
          </button>
        </div>
        <hr id="line" />
        <div className="skillsUsed">Skills:</div>
        <div className="skillList">React, Javascript, Html5, Css, Node.js</div>
        <hr id="line" />
        <div className="skillsUsed">Description:</div>
        <div className="description">
          A collaborative React application that allow you to choose a movie and
          give it a rating. Choose from your favorite movies and go give them
          ratings so all of your friends can see what you thought.
        </div>
      </div>
    </div>
  );
};

export default Projects;
