import React from "react";

const SectionTitleImage = props => (
  <div className="relative flex-content-centered Section-title">
    <h2 className="centered">{props.title.toUpperCase()}</h2>
    <img src={props.src} alt={props.alt} className="image" />
  </div>
);

export default SectionTitleImage;
