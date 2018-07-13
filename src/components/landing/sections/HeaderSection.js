import React from "react";
import TrackingFadeIn from "../../animations/TrackingFadeIn";
import SVG from "../../tools/images/SVG";

const HeaderSection = props => {
  const { content } = props;
  return (
    <div className="vh flex-column Big-section" id="home">
      <div
        className="flex-1 Header-section relative"
        style={{ backgroundImage: `url(${content.background})` }}
      >
        <div className="absolute">
          <TrackingFadeIn>
            <div className="Header-items flex flex-column flex-content-center">
              <div className="logo">
                <SVG fill="white" path={content.logo} className="image" />
              </div>
            </div>
          </TrackingFadeIn>
          <TrackingFadeIn>
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
          </TrackingFadeIn>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
