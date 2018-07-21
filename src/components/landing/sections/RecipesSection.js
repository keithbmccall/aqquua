import React from "react";

const RecipesSection = props => {
  const renderImages = (image, key) => {
    return (
      <div className="Recipes-image-holder flex" key={key}>
        <div style={{ background: `url(${image})` }} className="image" />
        <div className="centered Recipes-overlay" />
      </div>
    );
  };

  const recipesImages = props.item.images.map(renderImages);
  return (
    <div className="flex-column Big-section">
      <div className="flex flex-1 Recipes-container collapse-row-column">
        {recipesImages}
      </div>
    </div>
  );
};

export default RecipesSection;
