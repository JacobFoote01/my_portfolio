import "../css/navbar.css";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <>
      <a href="/" className="navHome">
        <Logo className="navLogo" />
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
        My Work
      </a>
    </>
  );
};

export default NavBar;
