import React, { Fragment } from "react";
import ProductsCircleItem from "./ProductsCircleItem";

const ProductsCircleMap = props => {
  const content = props.fish.map((item, key) => (
    <ProductsCircleItem item={item} key={key} />
  ));
  return <Fragment>{content}</Fragment>;
};

export default ProductsCircleMap;
