import React from "react";
import "../css/navbar.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <img src="JF Logo.png" className="navHome" />
      </a>
      <br />
      <div className="navLinks">
        <a
          className="Link1"
          href="https://www.linkedin.com/in/jacob-foote-4905a7292/"
        >
          <FaLinkedin />
        </a>
        <a className="Link2" href="https://github.com/JacobFoote01">
          <FaGithub />
        </a>
        <a className="Link3" href="https://www.facebook.com/jacob.foote.927/">
          <FaFacebook />
        </a>
      </div>
      <br />
    </nav>
  );
};

export default NavBar;
