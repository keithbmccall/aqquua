import React from "react";
import LargeTextWithTitle from "../tools/text/LargeTextWithTitle";
import ContentImages from "../tools/media/ContentImages";
//
const Sustainability = props => {
  const { info } = props;
  const image = info.images.slice(0, 1);
  info.images = info.images.slice(1);
  return (
    <div className="container">
      <div className="Sus-container">
        <LargeTextWithTitle info={info} />

        <img src={image[0].image} className="image Research-big" />

        <ContentImages info={info} />
      </div>
    </div>
  );
};

export default Sustainability;
