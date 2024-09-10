import React from "react";

const About = () => {
  return (
    <>
      <div className="about">
        <h1 className="aboutTitle">About Me</h1>
        <hr id="line" />
        <img className="headShot" src="Jacob Headshot.jpg" />
        <hr id="line" />
        <div className="textBody">
          Hello! My name is Jacob Foote. I am a full-stack web developer who
          loves learning new things. I completed the Web Development Program at
          Devmountain in December of 2023. When I am not coding, you can find me
          working on cars, snowboarding, biking, camping, or usually spending time with
          my wife and son.
        </div>
      </div>
    </>
  );
};

export default About;
