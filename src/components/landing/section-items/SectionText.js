import React from "react";
import TextAndHeadline from "../../tools/text/TextAndHeadline";
import TrackingAnimations from "../../animations/TrackingAnimations";
import PropTypes from "prop-types";
const SectionText = props => (
  <div
    className={`flex-1 flex Section-text-holder ${(props.className || "") &&
      props.className}`}
  >
    <TrackingAnimations
      className={`${!props.number && "flex-content-center"}`}
      type="sectionFade"
    >
      <div className="flex flex-content-center">
        <TextAndHeadline
          text={props.caption}
          headline={props.headline}
          className={`${
            props.fish ? "Products-caption" : " "
          } flex-1 flex-column`}
        />
      </div>
    </TrackingAnimations>
  </div>
);

export default SectionText;

SectionText.propTypes = {
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).required,
  headline: PropTypes.string.required
};
