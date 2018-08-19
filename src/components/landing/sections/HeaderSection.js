import React from "react";
import SVGC from "../../tools/images/SVG";
import LogoAnimation from "../../animations/LogoAnimation";
//
const HeaderSection = props => {
  const { content } = props;
  return (
    <div className="vh flex-column Big-section relative" id="home">
      <div
        className="flex-1 Header-section"
        style={{ backgroundImage: `url(${content.background})` }}
      >
        <LogoAnimation />
        <SVGC
          path={content.logo.tagLine}
          className="image centered tagline"
          fill="white"
        />
      </div>
    </div>
  );
};

export default HeaderSection;
