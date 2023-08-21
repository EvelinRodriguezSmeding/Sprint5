import React from "react";
import Logo from "./components/Logo";
import "../Navbar/Navbar.css";
import NavbarList from "./components/NavbarList";
function Navbar() {
  return (
    <>
      <nav className="navbar" >
        <Logo />
        <NavbarList/>
      </nav>
    </>
  );
}

export default Navbar;
