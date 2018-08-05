import React from "react";
import LargeTextWithTitle from "../tools/text/LargeTextWithTitle";
import ContentImages from "../tools/media/ContentImages";
//
const Sustainability = props => {
  const { info } = props;
  console.log(info);
  const image = info.images.slice(0, 1);
  info.images = info.images.slice(1);
  return (
    <div className="container">
      <div className="Sus-container">
        <LargeTextWithTitle info={info} image={image} />

        <ContentImages info={info} />
      </div>
    </div>
  );
};

export default Sustainability;
