import React, { Fragment } from "react";
import SectionAnimation from "../../animations/SectionAnimation";

const SectionText = props => (
  <div
    className={`flex-1 flex Section-text-holder collapse-row-column ${props.className ||
      ""}`}
  >
    {props.fish ? (
      <div className="Products-caption flex-1 flex flex-column">
        {props.caption.map((item, key) => <p key={key}>{item}</p>)}
      </div>
    ) : (
      <Fragment>
        <SectionAnimation
          className="Section-left"
          content={props.headline || ""}
          type="title"
          eatFishTag={props.eatFishTag}
        />
        <SectionAnimation
          className="Section-text"
          content={props.caption}
          type="text"
        />
      </Fragment>
    )}
    
  </div>
);

export default SectionText;
