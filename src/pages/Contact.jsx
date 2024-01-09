import React from "react";
import "../css/contact.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div>
        <img></img>
        <h1 className="contactTitle">Contact Me Here</h1>
        <form className="contactForm">
          <input type="text" placeholder="Name" className="name" />
          <br />
          <input type="text" placeholder="Email" className="email" />
          <br />
          <input type="textbox" placeholder="Message" className="message" />
          <br />
          <button type="submit" className="sendBtn">
            Send
          </button>
        </form>
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
