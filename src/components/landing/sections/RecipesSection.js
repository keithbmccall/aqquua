import React from "react";
import TextAndHeadline from "../../tools/text/TextAndHeadline";
import RecipesAnimation from "../../animations/RecipesAnimation";
import AnyImageAnimation from "../../animations/AnyImageAnimation";

const RecipesSection = props => {
  const renderImages = (image, key) => {
    return (
      <div className="Recipes-image-holder" key={key}>
        <img src={image} className="image" alt="Recipes" />
      </div>
    );
  };
  console.log(props);
  const recipesImages = props.item.images.images.map(renderImages);
  const recipeImage = props.item.images.images[1];
  return (
    <div
      className="flex-column Big-section vh flex Recipes-container"
      id="Recipes"
    >
      <div className="flex Recipes-content-container collapse-row-column flex-1">
        <AnyImageAnimation>
          <a
            href="https://www.yummly.com/profile/MarvelousCulinaire61283"
            className="Recipes-icon-holder"
          >
            <img
              src={props.item.images.icon}
              className="image Recipes-icon light-shadow-round"
              alt="Recipes"
            />
          </a>
        </AnyImageAnimation>
        <RecipesAnimation type="image">
          <a href="https://www.yummly.com/profile/MarvelousCulinaire61283">
            <img src={recipeImage} className="image" alt="Recipes" />
          </a>
        </RecipesAnimation>
      </div>
    </div>
  );
};

export default RecipesSection;
