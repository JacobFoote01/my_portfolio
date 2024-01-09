import "../css/navbar.css";
import Logo from "./Logo";

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
      <a className="navResume">Resume</a>
    </>
  );
};

export default NavBar;
