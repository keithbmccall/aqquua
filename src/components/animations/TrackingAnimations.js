import React, { Component } from "react";
import { TrackDocument, TrackedDiv } from "react-track";
import { topTop, calculateScrollY } from "react-track/tracking-formulas";
import { tween } from "react-imation";
import { percent } from "react-imation/tween-value-factories";
import PropTypes from "prop-types";

export default class TrackingAnimations extends Component {
  animationLogic = (posTopTop, scrollY) => {
    let type;
    switch (this.props.type) {
      case "sectionFade":
        type = tween(scrollY, [
          [posTopTop - 500, { opacity: 0 }],
          [posTopTop - 300, { opacity: 1 }]
        ]);
        break;
      case "headerFade":
        type = tween(scrollY, [
          [0, { opacity: 0, marginTop: 0 }],
          [posTopTop - 600, { opacity: 0, marginTop: 0 }],
          [posTopTop - 200, { opacity: 1, marginTop: this.props.scene1 }],
          [posTopTop + 200, { opacity: 1, marginTop: this.props.scene2 }]
        ]);
        break;
      case "numberFade":
        type = tween(scrollY, [
          [posTopTop - 600, { opacity: 0 }],
          [posTopTop - 200, { opacity: 1 }]
        ]);
        break;
      case "ribbonsLeft":
        type = tween(scrollY, [
          [posTopTop - 500, { left: percent(100) }],
          [posTopTop - 200, { left: percent(0) }]
        ]);
        break;
      case "ribbonsRight":
        type = tween(scrollY, [
          [posTopTop - 582, { right: percent(100) }],
          [posTopTop - 282, { right: percent(0) }]
        ]);
        break;
      default:
        type = tween(scrollY, [
          [posTopTop - 582, { right: percent(100) }],
          [posTopTop - 282, { right: percent(0) }]
        ]);
    }

    return (
      <div className={`${this.props.className}`} style={type}>
        {this.props.children}
      </div>
    );
  };
  render() {
    return (
      <TrackDocument formulas={[topTop, calculateScrollY]}>
        {(topTop, scrollY) => (
          <TrackedDiv formulas={[topTop]}>
            {posTopTop => this.animationLogic(posTopTop, scrollY)}
          </TrackedDiv>
        )}
      </TrackDocument>
    );
  }
}
TrackingAnimations.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  scene1: PropTypes.number,
  scene2: PropTypes.number
};
