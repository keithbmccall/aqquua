import React from "react";
import TextAndHeadline from "../../tools/text/TextAndHeadline";
import RecipesAnimation from "../../animations/RecipesAnimation";

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
        <RecipesAnimation>
          <TextAndHeadline
            headline="RECIPES"
            text="Delicious Aqquua Recipes. Powered by Yummly."
            className="text-black"
          />
        </RecipesAnimation>
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
