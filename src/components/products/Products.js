import React from "react";
import WaveAnimation from "../animations/WaveAnimation";
import image from "../../assets/images/png/redsnapper.png";
import ProductsHeroAnimation from "../animations/ProductsHeroAnimation";

const Products = props => {
  const { info } = props;

  return (
    <div className="container">
      <WaveAnimation color="white" />
      <div className="Products-container flex collapse-row-column">
        <div className="Products-info">
          <h1>
            {info.fish.toUpperCase()}
            <span>{`(${info.scienceName})`}</span>
          </h1>
          {info.caption.map((caption, key) => <p key={key}>{caption}</p>)}
        </div>
        <div className="Products-hero-holder flex">
          <ProductsHeroAnimation className="Products-hero">
            <img src={image} className="image" />
          </ProductsHeroAnimation>
        </div>
      </div>
    </div>
  );
};

export default Products;
