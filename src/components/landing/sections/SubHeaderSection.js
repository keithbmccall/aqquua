import React from "react";
import WeAreCarousel from "../carousel/WeAreCarousel";

const SubHeaderSection = props => {
  const { item } = props;

  return (
    <div className="flex-column flex Big-section Sub-header-section">
      <WeAreCarousel
        weAreContent={item.content}
        title={item.title}
        logo={item.logo}
      />
    </div>
  );
};
export default SubHeaderSection;
