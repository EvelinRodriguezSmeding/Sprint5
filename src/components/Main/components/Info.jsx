import React from "react";

function Info({ icon, title, location, shareFiles, seeHowLink, icon2 }) {
  return (
    <div className="information">
      <div className="icon-info">{icon}</div>
      <div className="info-box">
        <h2>{title}</h2>
        <p>{location}</p>
        <p>{shareFiles}</p>
        <a>{seeHowLink} {icon2}</a>
      </div>
      <hr />
    </div>
  );
}

export default Info;
