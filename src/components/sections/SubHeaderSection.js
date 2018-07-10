import React from "react";
import WeAreCarousel from "../landing/carousel/WeAreCarousel";

const SubHeaderSection = props => {
  const { item } = props;
  console.log(item);

  return (
    <div className="flex-column flex Big-section" id={item.id}>
      <WeAreCarousel weAreContent={item.content} title={item.title} />
    </div>
  );
};
export default SubHeaderSection;
