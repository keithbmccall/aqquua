import React from "react";
import TrackingAnimations from "../../animations/TrackingAnimations";
import SVGC from "../../tools/images/SVG";

const HeaderSection = props => {
  const { content } = props;
  return (
    <div className="vh flex-column Big-section" id="home">
      <div
        className="flex-1 Header-section relative"
        style={{ backgroundImage: `url(${content.background})` }}
      >
        
        ls
      </div>
    </div>
  );
};

export default HeaderSection;
