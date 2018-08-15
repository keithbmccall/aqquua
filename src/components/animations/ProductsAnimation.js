import React, { Component } from "react";
import Waypoint from "react-waypoint";

export default class ProductsAnimation extends Component {
  constructor() {
    super();
    this.state = {
      className: ""
    };
  }
  bounceIn = () => {
    this.setState({
      className: "Products-animation"
    });
  };
  render() {
    return (
      <Waypoint onEnter={this.bounceIn}>
        <div className={`Products-roll ${this.state.className}`}>
          <div className={`Products ${this.state.className}`}>
            {this.props.children}
          </div>
        </div>
      </Waypoint>
    );
  }
}
