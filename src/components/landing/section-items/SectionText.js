import React from "react";
import TextAndHeadline from "../../tools/text/TextAndHeadline";
import TrackingAnimations from "../../animations/TrackingAnimations";

const SectionText = props => (
  <div
    className={`flex-1 flex Section-text-holder ${(props.className || "") &&
      props.className}`}
  >
    <TrackingAnimations
      className={`${!props.number && "flex-content-center"}`}
      type="sectionFade"
    >
      <div className="flex flex-1 flex-content-center">
        <TextAndHeadline
          text={props.caption}
          headline={props.headline}
          className={`${!props.fish &&
            "text-white"} flex-1 flex-column ${props.contentClassName &&
            props.contentClassName}`}
        />
      </div>
    </TrackingAnimations>
  </div>
);

export default SectionText;
