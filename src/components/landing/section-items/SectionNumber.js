import React from "react";
import TrackingFadeNumber from "../../animations/TrackingFadeNumber";

const SectionNumber = props => (
  <div className="flex-1 Section-number-holder flex">
    <TrackingFadeNumber>
      <div className="Section-number text-white flex-1">
        {props.content}
        <span>.</span>
      </div>
    </TrackingFadeNumber>
  </div>
);

export default SectionNumber;
