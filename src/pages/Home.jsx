import React, { useState } from "react";
import Contact from "./Contact.jsx";
import About from "./About.jsx";

const ResumeDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="dropdown">
      <button className="navResume" onClick={toggleDropdown}>
        Resume
      </button>
      {dropdown && (
        <div className="dropdown-content">
          <a href="">PDF</a>
          <br />
          <a href="">Word</a>
          <br />
          <a href="">HTML</a>
        </div>
      )}
    </div>
  );
};

const Home = () => {
  return (
    <>
      <h1 className="homeTitle">Welcome</h1>
      <About />
      <ResumeDropdown />
      <Contact />
    </>
  );
};

export default Home;
