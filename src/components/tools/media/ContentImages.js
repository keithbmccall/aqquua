import React from "react";

const ContentImages = props => {
  const { info } = props;
  console.log(info)
  return (
    <div className="Content-image-holder flex">
      <div className="Content-image-title collapse-row-column">
        {info.images.map((image, key) => (
          <div className="Content-holder flex flex-column" key={key}>
            <img src={image.image} className="image" alt="title" />
            <h4>{image.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ContentImages;
