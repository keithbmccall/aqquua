import React, { Fragment } from "react";
import ProductsAnimation from "../../animations/ProductsAnimation";

const ProductsCircleMap = props => {
  const content = props.fish.map((item, key) => (
    <div className="Products-fish-square" key={key}>
      <ProductsAnimation>
        <img src={item.fish} className="image" />
      </ProductsAnimation>
    </div>
  ));
  return <Fragment>{content}</Fragment>;
};

export default ProductsCircleMap;
