import React from "react";
import ReactSVG from "react-svg";

const SVG = props => (
  <ReactSVG
    path={props.path}
    svgStyle={{ fill: props.fill }}
    svgClassName={props.className}
  />
);

export default SVG;
