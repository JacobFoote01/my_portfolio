import React, { useState } from "react";
import About from "../src/components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import { FaRegFilePdf } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import "../src/css/home.css";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleResume = () => {
    window.open("Resume.pdf");
  };

  const handleContact = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="homeContainer">
      <div className="buttonContainer">
        <button className="contact" onClick={handleContact}>
          <MdOutlineEmail /> Contact Me
        </button>
        <button className="resume" onClick={handleResume}>
          <FaRegFilePdf /> Resume
        </button>
      </div>

      {showModal && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <h2>Contact Information</h2>
            <p>Email: jacobjfoote01@gmail.com</p>
            <p>Phone: (801) 674-3235</p>
            <button className="closeButton" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="topContainer">
        <About />
        <Skills />
      </div>
      <Projects />
    </div>
  );
};

export default Home;

