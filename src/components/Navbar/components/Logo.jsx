import React from 'react'
import '../../Navbar/Navbar.css'
import LogoNavbar from "../../../../public/icons/logo.svg";
function Logo() {
  return (
    <>
      <img className="logoNavBar" src={LogoNavbar} alt="logo" />
    </>
  )
}

export default Logo