import React from "react";

const TextAndHeadline = props => (
  <div className={`${props.className} Section-text`}>
    <h4>{props.headline}</h4>
    <p className="">{props.text}</p>
  </div>
);

export default TextAndHeadline;
