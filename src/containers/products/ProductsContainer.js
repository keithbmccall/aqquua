import React, { Component } from "react";
import { fishProductsInfo } from "../../data";
import Products from "../../components/products/Products";
//
export default class ProductsContainer extends Component {
  render() {
    return <Products fishProductsInfo={fishProductsInfo} />;
  }
}
