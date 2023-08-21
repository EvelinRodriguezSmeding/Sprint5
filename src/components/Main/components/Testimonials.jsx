import React from "react";

function Testimonials({ quote, icon, name, title, className }) {
  return (
    <>
      <div className="testimonials">
        <p>{quote}</p>
        <div className="testimonial-list-container">
          <div className={className}> {icon}</div>
          <ul className="list-style">
            <li>
              <b>{name}</b>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
