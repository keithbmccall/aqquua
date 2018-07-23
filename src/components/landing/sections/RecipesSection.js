import React from "react";
import { Link } from "react-router-dom";

const RecipesSection = props => {
  const renderImages = (image, key) => {
    return (
      <div className="Recipes-image-holder flex" key={key}>
        <div style={{ background: `url(${image})` }} className="image" />
        <div className="centered Recipes-overlay" />
      </div>
    );
  };

  const recipesImages = props.item.images.images.map(renderImages);
  console.log(props.item.images.backgroundImage);
  return (
    <div className="flex-column Big-section vh flex">
      <div
        className="Recipes-icon-holder flex"
        style={{
          backgroundImage: `url(${props.item.images.backgroundImage})`
        }}
      >
        <a href="https://www.yummly.com/profile/MarvelousCulinaire61283">
          <img src={props.item.images.icon} className="image" />
        </a>
      </div>

      <div className="flex flex-1 Recipes-container collapse-row-column">
        {recipesImages}
      </div>
      <div
        className="Recipes-icon-holder flex"
        style={{ backgroundImage: `url(${props.item.images.backgroundImage})` }}
      >
        <div>
          <img src={props.item.images.icon} className="image opacity-0" />
        </div>
      </div>
    </div>
  );
};

export default RecipesSection;
