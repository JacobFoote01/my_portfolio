import React from "react";
import About from "../src/components/About.jsx";
import "../src/css/home.css";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

const Home = () => {
  return (
    <>
      <button className="contact">Contact Me</button>
      <button className="resume" href="Resume.pdf">
        Resume
      </button>
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
