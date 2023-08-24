import React from "react";

function Testimonials(props) {
  return (
    <>
      <div className="testimonials">
        <p>{props.quote}</p>
        <div className="testimonial-list-container">
          <div className={props.className}> {props.icon}</div>
          <ul className="list-style">
            <li>
              <b>{props.name}</b>
            </li>
            <li id="title-list-testimonials">{props.title}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
