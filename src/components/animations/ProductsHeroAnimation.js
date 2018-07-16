import React, { Component } from "react";

export default class ProductsHeroAnimation extends Component {
  constructor() {
    super();
    this.state = {
      className: ""
    };
  }
  translateIn = () =>
    this.setState({
      className: "Products-hero-animation"
    });
  componentDidMount() {
    this.translateIn();
  }
  render() {
    return (
      <div className={`${this.props.className} ${this.state.className}`}>
        {this.props.children}
      </div>
    );
  }
}
