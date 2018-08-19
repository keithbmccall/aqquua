import React, { Component } from "react";
import Waypoint from "react-waypoint";

export default class ContentImageAnimation extends Component {
  constructor() {
    super();
    this.state = {
      className: ""
    };
  }
  bounceIn = () => {
    setTimeout(
      () =>
        this.setState({
          className: "animation"
        }),
      975
    );
  };
  render() {
    return (
      <Waypoint onEnter={this.bounceIn}>
        <div
          className={`Content-images-animation ${this.props.className} ${
            this.state.className
          }`}
        >
          {this.props.children}
        </div>
      </Waypoint>
    );
  }
}
