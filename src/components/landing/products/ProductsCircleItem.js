import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import ProductsAnimation from "../../animations/ProductsAnimation";
import text from "../../../assets/images/svgs/text/mahi.svg";
import SVG from "../../tools/images/SVG";

export default class ProductsCircleItem extends Component {
  constructor() {
    super();
    this.state = {
      revealed: false
    };
  }
  revealName = e => {
    e.preventDefault();
    this.setState({
      revealed: !this.state.revealed
    });
  };
  render() {
    const { item } = this.props;
    return (
      <div className="Products-fish-square">
        <div className="Products-text">
          <SVG path={text} fill="black" className="image" />
        </div>

        <ProductsAnimation>
          <img src={item.fish} className="image" alt={item.fish} />
        </ProductsAnimation>
      </div>
    );
  }
}
