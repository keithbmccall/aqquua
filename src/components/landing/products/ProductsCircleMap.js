import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ProductsAnimation from "../../animations/ProductsAnimation";

const ProductsCircleMap = props => {
  const content = props.fish.map((item, key) => (
    <Link to={`/products/${item.name}`} key={key}>
      <div className="Products-fish-square">
        <ProductsAnimation>
          <img src={item.fish} className="image" alt={item.fish} />
        </ProductsAnimation>
      </div>
    </Link>
  ));
  return <Fragment>{content}</Fragment>;
};

export default ProductsCircleMap;
