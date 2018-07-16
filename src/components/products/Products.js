import React from "react";
import WaveAnimation from "../animations/WaveAnimation";
import ProductsHeroAnimation from "../animations/ProductsHeroAnimation";

const Products = props => {
  const { info } = props;
  return (
    <div className="container">
      <WaveAnimation color="white" />
      <div className="Products-container flex collapse-row-column">
        <div className="Products-info">
          <h1 style={{ color: info.color }}>
            {info.fish.toUpperCase()}
            <span>{`(${info.scienceName})`}</span>
          </h1>
          {info.caption.map((caption, key) => <p key={key}>{caption}</p>)}
        </div>
        <div className="Products-hero-holder flex">
          <ProductsHeroAnimation className="Products-hero">
            <img src={info.hero} className="image" alt={info.name} />
          </ProductsHeroAnimation>
        </div>
      </div>
    </div>
  );
};

export default Products;
