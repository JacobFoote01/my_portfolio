import React from "react";
import { HiMiniWrenchScrewdriver } from 'react-icons/hi2';
import { SiJavascript, SiPostgresql, SiAxios, SiRedux, SiPostman } from 'react-icons/si';
import { FaReact, FaNode, FaGitAlt, FaGithub, FaAws } from 'react-icons/fa';
import { TiHtml5 } from 'react-icons/ti';
import { IoLogoCss3, IoLogoSass } from 'react-icons/io';
import { TbBrandOauth } from 'react-icons/tb';
import "../css/skills.css";

const skillData = [
  { name: "Javascript", icon: <SiJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Html5", icon: <TiHtml5 /> },
  { name: "Css", icon: <IoLogoCss3 /> },
  { name: "Sass", icon: <IoLogoSass /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Axios", icon: <SiAxios /> },
  { name: "Github", icon: <FaGithub /> },
];

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h1 className="skillsTitle">
        <HiMiniWrenchScrewdriver /> Skills
      </h1>
      <div className="allSkills">
        {skillData.map((skill, index) => (
          <div key={index} className="skill" aria-label={skill.name}>
            <div className="logo">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

