import React from "react";
import {
  HiMiniWrenchScrewdriver,
  SiJavascript,
  FaReact,
  TiHtml5,
  IoLogoCss3,
  IoLogoSass,
  FaNode,
  FaGitAlt,
  SiPostgresql,
  SiAxios,
  SiRedux,
  FaGithub,
  FaAws,
  SiPostman,
  TbBrandOauth,
} from "react-icons/all"; // Import all from a single location for clarity
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
  { name: "Aws", icon: <FaAws /> },
  { name: "OAuth", icon: <TbBrandOauth /> },
  { name: "Postman", icon: <SiPostman /> },
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

