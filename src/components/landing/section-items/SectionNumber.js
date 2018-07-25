import React from "react";
import TrackingAnimations from "../../animations/TrackingAnimations";

const SectionNumber = props => (
  <div className="flex-1 Section-number-holder flex">
    <TrackingAnimations type="numberFade">
      <div className="Section-number text-white flex-1 text-shadow-light">
        {props.content}
        <span>.</span>
      </div>
    </TrackingAnimations>
  </div>
);

export default SectionNumber;
