import React, { Component } from "react";
import Waypoint from "react-waypoint";

export default class RecipesAnimation extends Component {
  constructor() {
    super();
    this.state = {
      className: ""
    };
  }
  bounceIn = () => {
    this.setState({
      className: "Recipes-animation"
    });
  };
  render() {
    return (
      <Waypoint  onEnter={this.bounceIn}>
        <div
          className={
            this.props.type === "image"
              ? `Recipes-image-holder ${this.state.className}`
              : `flex-1 Recipes-caption flex ${this.state.className}`
          }
        >
          {this.props.children}
        </div>
      </Waypoint>
    );
  }
}
