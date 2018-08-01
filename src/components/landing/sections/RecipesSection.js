import React from "react";
import TextAndHeadline from "../../tools/text/TextAndHeadline";

const RecipesSection = props => {
  const renderImages = (image, key) => {
    return (
      <div className="Recipes-image-holder" key={key}>
        <img src={image} className="image" alt="Recipes" />
      </div>
    );
  };

  const recipesImages = props.item.images.images.map(renderImages);
  const recipeImage = props.item.images.images[0];
  return (
    <div className="flex-column Big-section vh flex Recipes-container" id="Recipes">
      <div className="flex Recipes-content-container collapse-row-column flex-1">
        <div className="flex-1 Recipes-caption flex">
          <TextAndHeadline
            headline="RECIPES"
            text={props.item.caption}
            className="text-black"
          />
        </div>

        <div className="Recipes-image-holder">
          <img src={recipeImage} className="image" alt="Recipes" />
        </div>
      </div>
    </div>
  );
};

export default RecipesSection;
