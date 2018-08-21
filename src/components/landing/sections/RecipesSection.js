import React from "react";
import RecipesAnimation from "../../animations/RecipesAnimation";
import AnyImageAnimation from "../../animations/AnyImageAnimation";
import { Link } from "react-router-dom";

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
          <Link to="/recipes/tips" className="Recipes-icon-holder Recipe-tips">
            <img
              src={props.item.images.tips}
              className="image Recipes-icon  light-shadow-round"
              alt="Recipes"
            />
          </Link>
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
