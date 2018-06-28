import React from "react";
import TrackingFadeIn from "../animations/TrackingFadeIn";
import SVG from "../tools/images/SVG";

const HeaderSection = props => {
  const { content } = props;
  console.log(content);
  return (
    <div className="vh flex-column Big-section">
      
      <div
        className="flex-1 Header-section relative"
        style={{ backgroundImage: `url(${content.background})` }}
      >
        <div className="absolute">
          <TrackingFadeIn>
            <h1>
              {content.title
                .split(" ")
                .slice(0, 2)
                .join(" ")
                .toUpperCase()}
              <br />
              <span>
                {content.title
                  .split(" ")
                  .slice(2)
                  .join(" ")
                  .toUpperCase()}
              </span>
            </h1>
          </TrackingFadeIn>
          <TrackingFadeIn>
            <div className="flex-column flex-content-center">
              <h1>
                {content.caption
                  .split(" ")
                  .slice(0, 2)
                  .join(" ")
                  .toUpperCase()}
              </h1>
              <div className="logo">
                <SVG fill="white" path={content.logo} className="image" />
              </div>
            </div>
          </TrackingFadeIn>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
