import React, { Component } from "react";
import { TrackDocument, TrackedDiv } from "react-track";
import { topTop, calculateScrollY } from "react-track/tracking-formulas";
import { tween } from "react-imation";

export default class MovingPrintsL extends Component {
  render() {
    return (
      <TrackDocument formulas={[topTop, calculateScrollY]}>
        {(topTop, scrollY) => (
          <TrackedDiv formulas={[topTop]}>
            {posTopTop => (
              <div
                className={`${this.props.className}`}
                style={tween(scrollY, [
                  [posTopTop - 600, { marginLeft: -1800 }],
                  [posTopTop - 200, { marginLeft: 0 }]
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
