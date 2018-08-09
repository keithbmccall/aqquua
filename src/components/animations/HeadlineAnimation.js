import React, { Component } from "react";
import Waypoint from "react-waypoint";

export default class HeadlineAnimation extends Component {
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
      <Waypoint scrollableAncestor={window} onEnter={this.bounceIn}>
        <div
          className={`Headline-animation ${this.props.className} ${
            this.state.className
          }`}
        >
          {this.props.children}
        </div>
      </Waypoint>
    );
  }
}
