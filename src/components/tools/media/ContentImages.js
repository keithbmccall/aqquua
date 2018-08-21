import React from "react";
import ContentImagesAnimation from "../../animations/ContentImagesAnimation";

const ContentImages = props => {
  const { info } = props;
  return (
    <div className="Content-image-holder flex">
      <div className="Content-image-title collapse-row-column">
        {info.images.map((image, key) => (
          <ContentImagesAnimation key={key}>
            <img src={image.image} className="image" alt="title" />
            <h4>{image.title}</h4>
          </ContentImagesAnimation>
        ))}
      </div>
    </div>
  );
};
export default ContentImages;
