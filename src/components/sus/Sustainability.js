import React from "react";
import LargeTextWithTitle from "../tools/text/LargeTextWithTitle";
import ContentImages from "../tools/media/ContentImages";
//
const Sustainability = props => {
  const { info } = props;
  console.log(info)
  return (
    <div className="container">
      <div className="Sus-container">
        <LargeTextWithTitle info={info} image={info.titleImage} />

        {info.images.map((image, key) => (
          <img src={image.image} className="image full-size-img" key={key} />
        ))}

        {/* <ContentImages info={info} /> */}
      </div>
    </div>
  );
};

export default Sustainability;
