import React from "react";

const SectionText = props => (
  <div className={`${props.className} Section-text`}>
    <h4>{props.headline}</h4>
    <p className="">{props.text}</p>
  </div>
);

export default SectionText;
