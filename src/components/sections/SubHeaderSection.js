import React from "react";
import WeAreCarousel from "../tools/carousels/WeAreCarousel";
import SectionText from "../tools/text/SectionText";

const SubHeaderSection = props => {
  const { item } = props;

  return (
    <div className="flex-column Big-section" id={item.id}>
      <div className="flex-1 flex-content-center">
        <div className="flex-column flex-content-center space-10">
          <WeAreCarousel weAreContent={item.content} title={item.title} />
          <SectionText text={item.text} />
        </div>
      </div>
    </div>
  );
};
export default SubHeaderSection;
