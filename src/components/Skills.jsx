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
import { SiPostman } from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";
import "../css/skills.css";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h1 className="skillsTitle">
        <HiMiniWrenchScrewdriver /> Skills
      </h1>
      <div className="allSkills">
        <div className="skill1">
          <SiJavascript className="logo" />
          Javascript
        </div>
        <div className="skill2">
          <FaReact className="logo" />
          React
        </div>
        <div className="skill3">
          <TiHtml5 className="logo" />
          Html5
        </div>
        <div className="skill4">
          <IoLogoCss3 className="logo" />
          Css
        </div>
        <div className="skill5">
          <IoLogoSass className="logo" />
          Sass
        </div>
        <div className="skill6">
          <FaNode className="logo" />
          Node.js
        </div>
        <div className="skill7">
          <FaGitAlt className="logo" />
          Git
        </div>
        <div className="skill8">
          <SiPostgresql className="logo" />
          PostgreSQL
        </div>
        <div className="skill9">
          <SiRedux className="logo" />
          Redux
        </div>
        <div className="skill10">
          <SiAxios className="logo" />
          Axios
        </div>
        <div className="skill11">
          <FaGithub className="logo" />
          Github
        </div>
        <div className="skill12">
          <FaAws className="logo" />
          Aws
        </div>
        <div className="skill14">
          <TbBrandOauth className="logo" />
          OAuth
        </div>
        <div className="skill15">
          <SiPostman className="logo" />
          Postman
        </div>
      </div>
    </div>
  );
};

export default Skills;
