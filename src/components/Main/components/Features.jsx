import React from "react";

function Features({icon, title, description}) {
  return (
    <div className="features-container">
      {icon}
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default Features;
