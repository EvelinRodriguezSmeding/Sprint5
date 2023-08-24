import React from "react";
import "../../Navbar/Navbar.css";

import { Link} from "react-router-dom";

function NavbarList() {
  return (
    <>
        <ul className="navbar-list">
            <li> <a href="#featuresLink">Features</a></li>
            <li> <a href="#team">Team</a></li>
            <li> <Link to={"/login"}>Sign In</Link></li>
        </ul>
    </>
  );
}

export default NavbarList;
