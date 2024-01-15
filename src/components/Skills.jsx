import React from "react";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoSass } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiPostgresql } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { BiLogoHeroku } from "react-icons/bi";
import { TbBrandOauth } from "react-icons/tb";
import { SiNginx } from "react-icons/si";
import "../css/skills.css";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h1 className="skillsTitle">
        <HiMiniWrenchScrewdriver /> Skills
      </h1>
      <div className="allSkills">
        <div className="skill1">
          <SiJavascript /> Javascript
        </div>
        <div className="skill1">
          <FaReact />
          <br />
          React
        </div>
        <div className="skill1">
          <TiHtml5 />
          <br />
          Html5
        </div>
        <div className="skill1">
          <IoLogoCss3 />
          <br />
          Css
        </div>
        <div className="skill1">
          <IoLogoSass />
          <br />
          Sass
        </div>
        <div className="skill1">
          <FaNode />
          <br />
          Node.js
        </div>
        <div className="skill1">
          <FaGitAlt />
          <br />
          Git
        </div>
        <div className="skill1">
          <SiPostgresql />
          <br />
          PostgreSQL
        </div>
        <div className="skill1">
          <SiRedux />
          <br />
          Redux
        </div>
        <div className="skill1">
          <SiAxios />
          <br />
          Axios
        </div>
        <div className="skill1">
          <FaGithub />
          <br />
          Github
        </div>
        <div className="skill1">
          <FaAws />
          <br />
          Aws
        </div>
        <div className="skill1">
          <FaBootstrap />
          <br />
          Bootstrap
        </div>
        <div className="skill1">
          <TbBrandOauth />
          <br />
          OAuth
        </div>
        <div className="skill1">
          <SiPostman />
          <br />
          Postman
        </div>
        <div className="skill1">
          <BiLogoHeroku />
          <br />
          Heroku
        </div>
        <div className="skill1">
          <SiNginx />
          <br />
          Nginx
        </div>
      </div>
    </div>
  );
};

export default Skills;
