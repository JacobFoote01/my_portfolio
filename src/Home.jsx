import React, { useState } from "react";
import About from "../src/components/About.jsx";
import "../src/css/home.css";
import { MdArrowDropDown } from "react-icons/md";

const ResumeDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <button className="contact">Contact Me</button>
      <div>
        <button className="resume" onClick={toggleDropdown}>
          Resume
        </button>
        {dropdown && (
          <div className="dropdown">
            <a href="Resume.pdf" className="pdf">
              PDF
            </a>
            <br />
            <a
              href="https://docs.google.com/document/d/1sjC1F2Ag_klnUo4rAS0HHKGfiqtrAPkVDpedbh6RapY/edit?usp=sharing"
              className="googleDoc"
            >
              Google Doc
            </a>
            <br />
            <a href="ResumeHTML.html" className="html">
              HTML
            </a>
          </div>
        )}
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <ResumeDropdown />
      <About />
    </>
  );
};

export default Home;
