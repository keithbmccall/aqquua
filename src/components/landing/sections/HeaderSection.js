import React from "react";
import SVGC from "../../tools/images/SVG";

const HeaderSection = props => {
  const { content } = props;
  return (
    <div className="vh flex-column Big-section relative" id="home">
      <div
        className="flex-1 Header-section"
        style={{ backgroundImage: `url(${content.background})` }}
      >
        <SVGC
          path={content.logo.word}
          className="image centered"
          fill="white"
        />
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
