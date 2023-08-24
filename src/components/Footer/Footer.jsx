import React from "react";
import Logo from "./components/Logo";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Socials from "./components/Socials";
import "./Footer.css";
import EmailForm from "./components/EmailForm";

function Footer() {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="footer-container">
          <Logo />
          <div className="footer-box">
            <Contact />
            <Nav />
            <Socials />
          </div>
        </div>
        <EmailForm/>
      </footer>
    </>
  );
}

export default Footer;
