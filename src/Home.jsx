import React from "react";
import About from "../src/components/About.jsx";
import "../src/css/home.css";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import { FaRegFilePdf } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Home = () => {
  const handleResume = () => {
    window.open("Resume.pdf");
  };

  const handleContact = () => {
    const emailAddress = "jacobjfoote01@gmail.com";
    const subject = "I saw your website and would like to talk";
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <button className="contact" onClick={handleContact}>
        <MdOutlineEmail /> Contact Me
      </button>
      <button className="resume" onClick={handleResume}>
        <FaRegFilePdf /> Resume
        <a href="Resume.pdf" />
      </button>
      <About />
      <Skills className="skills" />
      <Projects className="Projects" />
    </>
  );
};

export default Home;
