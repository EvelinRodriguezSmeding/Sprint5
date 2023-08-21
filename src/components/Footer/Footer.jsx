import React from "react";
import Logo from "./components/Logo";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Socials from "./components/Socials";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="footer-container">
          <Logo />
          <Contact />
          <Nav />
          <Socials />
        </div>
      </footer>
    </>
  );
}

export default Footer;
