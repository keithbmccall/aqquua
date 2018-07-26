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
    <div className="flex-column Big-section vh flex Recipes-container">
      <div className="flex Recipes-content-container collapse-row-column flex-1">
        <div className="flex-1 Recipes-caption flex">
          <TextAndHeadline
            link="https://www.yummly.com/profile/MarvelousCulinaire61283"
            headline="RECIPES"
            text="Delicious Aqquua Recipes. Powered by Yummly."
            className="text-black"
          />
        </div>

        <div className="Recipes-image-holder">
          <a href="https://www.yummly.com/profile/MarvelousCulinaire61283">
            <img src={recipeImage} className="image" alt="Recipes" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipesSection;
