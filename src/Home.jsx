import React from "react";
import About from "../src/components/About.jsx";
import "../src/css/home.css";
import Skills from "./components/Skills.jsx";

const Home = () => {
  return (
    <>
      <br />
      <button className="contact">Contact Me</button>
      <button className="resume" href="Resume.pdf">
        Resume
      </button>
      <About />
      <Skills />
    </>
  );
};

export default Home;
