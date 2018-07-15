import React from "react";
import SVG from "../../tools/images/SVG";
import TrackingAnimations from "../../animations/TrackingAnimations";

const HeaderSection = props => {
  const { content } = props;
  return (
    <div className="vh flex-column Big-section" id="home">
      <div
        className="flex-1 Header-section relative"
        style={{ backgroundImage: `url(${content.background})` }}
      >
        <div className="absolute">
          <TrackingAnimations
            scene1={-100}
            scene2={-200}
            type="headerFade"
            className="flex-content-center Tracking-fade-in"
          >
            <div className="Header-items flex flex-column flex-content-center">
              <div className="logo">
                <SVG fill="white" path={content.logo} className="image" />
              </div>
            </div>
          </TrackingAnimations>
          <TrackingAnimations
            scene1={0}
            scene2={0}
            type="headerFade"
            className="flex-content-center Tracking-fade-in"
          >
            <h1>
              {content.title
                .split(" ")
                .slice(0, 2)
                .join(" ")
                .toUpperCase()}
              <span>
                {` ${content.title
                  .split(" ")
                  .slice(2)
                  .join(" ")
                  .toUpperCase()}`}
              </span>
            </h1>
          </TrackingAnimations>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
