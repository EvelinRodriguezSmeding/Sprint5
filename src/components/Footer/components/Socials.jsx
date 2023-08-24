import React from 'react'
import Facebook from "../../../../public/icons/facebook-f.svg";
import Twitter from "../../../../public/icons/twitter.svg";
import Instagram from "../../../../public/icons/instagram.svg";

function Socials() {
  return (
    <>
      <div className='social-icons'>
      <a href="https://es-la.facebook.com/" target="_blank" rel="noopener noreferrer">
        <img className="icon facebook-icon" src={Facebook} alt="facebook-f-icon" />
      </a>
      <a href="https://twitter.com/?lang=es" target="_blank" rel="noopener noreferrer">
        <img className="icon twitter-icon" src={Twitter} alt="twitter-icon" />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <img className="icon instagram-icon" src={Instagram} alt="instagram-icon"/>
      </a>
      </div>
    </>  
)
}

export default Socials