import React, { useState } from "react";
import "../css/navbar.css";
import Logo from "./Logo";

const ResumeDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="dropdown">
      <a className="navResume" onClick={toggleDropdown}>
        Resume
      </a>
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

const NavBar = () => {
  return (
    <nav>
      <a href="/" className="navHome">
        <Logo />
      </a>
      <br />
      <a href="/about" className="navAbout">
        About
      </a>
      <br />
      <a href="/contact" className="navContact">
        Contact
      </a>
      <br />
      <ResumeDropdown className="navResume" />
    </nav>
  );
};

export default NavBar;
