import React from "react";
import "../css/navbar.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/jacob-foote-4905a7292/");
  };
  const handleGithub = () => {
    window.open("https://github.com/JacobFoote01");
  };

  return (
    <nav className="navbar">
      <a href="/">
        <img src="JF Logo.png" className="navHome" />
      </a>
      <br />
      <div className="navLinks">
        <a className="Link1" onClick={handleLinkedIn}>
          <FaLinkedin />
        </a>
        <a className="Link2" onClick={handleGithub}>
          <FaGithub />
        </a>
      </div>
      <br />
    </nav>
  );
};

export default NavBar;
