import React from "react";
import { Link } from "react-router-dom";
import ProductsAnimation from "../../animations/ProductsAnimation";
import SVG from "../../tools/images/SVG";

const ProductsCircleItem = props => {
  const { item } = props;
  return (
    <div className="Products-fish-square">
      <ProductsAnimation>
        <div className="Products-text flex flex-content-center">
          <Link to={`/products/${item.name}`}>
            <SVG path={item.svg} fill="black" className="image" />
          </Link>
        </div>
        <img src={item.png} className="image" alt={item.fish} />
      </ProductsAnimation>
    </div>
  );
};

export default ProductsCircleItem;
