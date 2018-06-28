import React, { Fragment } from "react";
import SVG from "../../tools/images/SVG";
import ProductsAnimation from "../../animations/ProductsAnimation";

const ProductsCircleMap = props => {
  const content = props.fish.map((item, key) => (
    <ProductsAnimation key={key}>
      <SVG path={item.fish} fill={item.color} className="image" />
    </ProductsAnimation>
  ));
  return <Fragment>{content}</Fragment>;
};

export default ProductsCircleMap;
