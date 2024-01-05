import "../css/navbar.css";
import Logo from "./Logo";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <a href="/" className="navHome">
        <Logo />
      </a>
      <br />
      <a href="/about" className="navAbout">
        About
      </a>
      <br />
      <a href="/contact" className="navContact">
        Contact
      </a>
      <br />
      {/* <a href="/fun" className="navFun">
        Fun
      </a>
      <br /> */}
      <a href="https://github.com/JacobFoote01" className="navWork">
        <FaGithub />
      </a>
    </>
  );
};

export default NavBar;
