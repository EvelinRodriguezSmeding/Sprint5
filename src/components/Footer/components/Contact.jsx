import React from "react";
import Location from "../../../../public/icons/icon-location.svg";
import Phone from "../../../../public/icons/icon-phone.svg";
import Email from "../../../../public/icons/icon-email.svg";

function Contact() {
  return (
    <>
      <div className="contact-wrapper">
        <div className="contact-item">
          <img src={Location} alt="icon-location" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>

        <div className="contact-item">
          {" "}
          <img src={Phone} alt="icon-phone" />
          <p>+1-543-123-4567</p>
        </div>
        
        <div className="contact-item">
          {" "}
          <img src={Email} alt="" />
          <p>example@fylo.com</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
