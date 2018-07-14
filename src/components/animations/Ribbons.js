import React, { Component } from "react";
import { TrackDocument, TrackedDiv } from "react-track";
import { topTop, calculateScrollY } from "react-track/tracking-formulas";
import { tween } from "react-imation";
import { translateX, percent } from "react-imation/tween-value-factories";
//
class RibbonsL extends Component {
  render() {
    return (
      <TrackDocument formulas={[topTop, calculateScrollY]}>
        {(topTop, scrollY) => (
          <TrackedDiv formulas={[topTop]}>
            {posTopTop => (
              <div
                className={`${this.props.className}`}
                style={tween(scrollY, [
                  [posTopTop - 500, { left: percent(100) }],
                  [posTopTop - 200, { left: percent(0) }]
                ])}
              >
                {this.props.children}
              </div>
            )}
          </TrackedDiv>
        )}
      </TrackDocument>
    );
  }
}
class RibbonsR extends Component {
  render() {
    return (
      <TrackDocument formulas={[topTop, calculateScrollY]}>
        {(topTop, scrollY) => (
          <TrackedDiv formulas={[topTop]}>
            {posTopTop => (
              <div
                className={`${this.props.className}`}
                style={tween(scrollY, [
                  [posTopTop - 582, { right: percent(100) }],
                  [posTopTop - 282, { right: percent(0) }]
                ])}
              >
                {this.props.children}
              </div>
            )}
          </TrackedDiv>
        )}
      </TrackDocument>
    );
  }
}
export { RibbonsL, RibbonsR };
