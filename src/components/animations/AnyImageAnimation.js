import React, { Component } from "react";
import Waypoint from "react-waypoint";

export default class AnyImageAnimation extends Component {
  constructor() {
    super();
    this.state = {
      className: ""
    };
  }
  bounceIn = () => {
    this.setState({
      className: "Image-animation"
    });
  };
  render() {
    return (
      <Waypoint
    
        onEnter={this.bounceIn}
        bottomOffset={this.props.bO ? this.props.bO : "50%"}
      >
        <div className={`Image-animation-holder ${this.state.className}`}>{this.props.children}</div>
      </Waypoint>
    );
  }
}
