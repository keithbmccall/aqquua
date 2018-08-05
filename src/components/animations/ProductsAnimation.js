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
    console.log("enter");
    this.setState({
      className: "Products-animation"
    });
  };
  render() {
    return (
      <Waypoint scrollableAncestor={window} onEnter={this.bounceIn}>
        <div className={`Products-roll ${this.state.className}`}>
          <div className={`Products ${this.state.className}`}>
            {this.props.children}
          </div>
        </div>
      </Waypoint>
    );
  }
}
