import React from 'react'
import Facebook from "../../../../public/icons/facebook-f.svg";
import Twitter from "../../../../public/icons/twitter.svg";
import Instagram from "../../../../public/icons/instagram.svg";

function Socials() {
  return (
    <>
      <div className='social-icons'>
        <img className="icon facebook-icon" src={Facebook} alt="facebook-f-icon" />
        <img className="icon twitter-icon" src={Twitter} alt="twitter-icon" />
        <img className="icon instagram-icon" src={Instagram} alt="instagram-icon"/>
      </div>
    </>  
)
}

export default Socials