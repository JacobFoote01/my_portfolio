import React from "react";
import "../css/contact.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div>
        <button type="submit" className="sendBtn">
          Contact me Here
        </button>
        <h2>You can connect with me on:</h2>
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
    </>
  );
};

export default Contact;
