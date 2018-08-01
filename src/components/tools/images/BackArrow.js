import React from "react";
import SVGC from "./SVG";
import images from "../../../data/images";
import { withRouter } from "react-router-dom";

const BackArrow = props => {
  return (
    <a
      onClick={
        props.path
          ? () => {
              props.history.push(props.path);
            }
          : () => props.history.goBack()
      }
    >
      <SVGC
        path={images.backarrow}
        className="back-arrow image"
        fill={props.color}
      />
    </a>
  );
};
export default withRouter(BackArrow);
