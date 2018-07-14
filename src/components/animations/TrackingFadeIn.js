import React, { Component } from "react";
import { TrackDocument, TrackedDiv } from "react-track";
import { topTop, calculateScrollY } from "react-track/tracking-formulas";
import { tween } from "react-imation";

export default class TrackingFadeIn extends Component {
  render() {
    return (
      <TrackDocument formulas={[topTop, calculateScrollY]}>
        {(topTop, scrollY) => (
          <TrackedDiv formulas={[topTop]}>
            {posTopTop => (
              <div
                className="flex-content-center Tracking-fade-in"
                style={tween(scrollY, [
                  [0, { opacity: 0, marginTop: 0 }],
                  [posTopTop - 600, { opacity: 0, marginTop: 0 }],
                  [
                    posTopTop - 300,
                    { opacity: 1, marginTop: this.props.scene1 }
                  ],
                  [
                    posTopTop + 100,
                    { opacity: 1, marginTop: this.props.scene2 }
                  ]
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
