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
          loves learning new things. I am 27 years old and the sixth of seven
          children. I was born and raised In Salt Lake City, Utah. I completed
          the Web Development Program at Devmountain in December of 2023. When I
          am not coding, you can find me working on cars, snowboarding, biking,
          or usually spending time with my family.
        </div>
      </div>
    </>
  );
};

export default About;
