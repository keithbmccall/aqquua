import React from "react";
import TextAndHeadline from "../../tools/text/TextAndHeadline";
import TrackingFade from "../../animations/TrackingFade";

const SectionText = props => (
  <div
    className={`flex-1 flex Section-text-holder ${props.className &&
      props.className}`}
  >
    <TrackingFade className={`${!props.number && "flex-content-center"}`}>
      <div className="flex flex-1 flex-content-center">
        <TextAndHeadline
          text={props.caption}
          headline={props.headline}
          className={`${!props.fish &&
            "text-white"} flex-1 flex-column ${props.contentClassName &&
            props.contentClassName}`}
        />
      </div>
    </TrackingFade>
  </div>
);

export default SectionText;
