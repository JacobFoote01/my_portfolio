import React from "react";

const Contact = () => {
  return (
    <>
      <div>
        <img></img>
        <h1>Contact Me Here</h1>
        <form>
          <input type="text" placeholder="Name" />
          <br />
          <input type="text" placeholder="Email" />
          <br />
          <input type="textbox" placeholder="Message" />
          <br />
          <button type="submit" className="sendBtn">
            Send
          </button>
        </form>
        <div>
          You can also find me on:
          <div
            href="https://www.linkedin.com/in/jacob-foote-4905a7292/"
            placeholder="LinkedIn"
          />
          <div href="https://github.com/JacobFoote01" placeholder="GitHub" />
          <div
            href="https://www.facebook.com/jacob.foote.927/"
            placeholder="Facebook"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
