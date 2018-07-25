import React from "react";
import { Link } from "react-router-dom";
import ProductsAnimation from "../../animations/ProductsAnimation";
import SVG from "../../tools/images/SVG";

const ProductsCircleItem = props => {
  const { item } = props;
  return (
    <div className="Products-fish-square">
      <ProductsAnimation>
        <Link to={`/products/${item.name}`}>
          <div className="Products-text flex flex-content-center">
            <SVG path={item.svg} fill="black" className="image" />
          </div>
          <img src={item.png} className="image light-shadow-round" alt={item.fish} />
        </Link>
      </ProductsAnimation>
    </div>
  );
};

export default ProductsCircleItem;
