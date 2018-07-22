import React, { Component } from "react";
import { fishProductsInfo } from "../../data";
import Products from "../../components/products/Products";
//
export default class ProductsContainer extends Component {
  render() {
    const info = fishProductsInfo[this.props.match.params.id];
    return <Products info={info} />;
  }
}
