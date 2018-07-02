import React from "react";
import WeAreCarousel from "../tools/carousels/WeAreCarousel";
import SectionText from "../tools/text/SectionText";

const SubHeaderSection = props => {
  const { item } = props;
  return (
    <div className="flex-column Big-section" id={item.id}>
        <div className="flex">
          <WeAreCarousel weAreContent={item.content} title={item.title} />
        </div>
    </div>
  );
};
export default SubHeaderSection;
