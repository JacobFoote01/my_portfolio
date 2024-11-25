import React from "react";
import "../css/home.css";

const About = () => {
  return (
    <section className="about">
      <h1 className="aboutTitle">About Me</h1>
      <hr id="line" />
      <img className="headShot" src="/Jacob Headshot.jpg" alt="Jacob Foote headshot" />
      <hr id="line" />
      <p className="textBody">Hi, I'm Jacob Foote—a passionate full-stack web developer with a love for continuous learning and problem-solving. I graduated from Devmountain's Web Development Program in December 2023, where I honed my skills in creating dynamic, user-friendly applications. When I'm not immersed in coding, you’ll find me under the hood of a car, carving through snowy slopes, cycling, camping, or cherishing quality time with my wife and son.</p>
    </section>
  );
};

export default About;

