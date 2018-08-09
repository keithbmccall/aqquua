import React, { Component } from "react";

import { aqquuaLogo } from "../../data";
import SVGC from "../tools/images/SVG";

export default class LandingAnimation extends Component {
  constructor() {
    super();
    this.state = {
      wordPop: "",
      logoPop: "",
      finishPop: "",
      dotPop: "",
      holderPop: ""
    };
  }
  renderText = (letter, key) =>
    letter === "-" ? (
      <span key={key} style={{ visibility: "hidden" }}>
        {letter}
      </span>
    ) : (
      <span key={key}>{letter}</span>
    );
  popHolder = () =>
    this.setState({
      holderPop: "animate"
    });
  popWords = () =>
    this.setState({
      wordPop: "animate"
    });
  unPopWords = () =>
    this.setState({
      wordPop: ""
    });
  popLogo = () =>
    this.setState({
      logoPop: "animate"
    });
  popFinish = () =>
    this.setState({
      finishPop: "finish"
    });
  popDot = () =>
    this.setState({
      dotPop: "animate"
    });
  componentDidMount() {
    setTimeout(() => this.popHolder(), 3500);
    setTimeout(() => this.popWords(), 1500);
    setTimeout(() => this.unPopWords(), 3500);
    setTimeout(() => this.popLogo(), 1400);
    setTimeout(() => this.popFinish(), 6000);
    setTimeout(() => this.popDot(), 2000);
  }
  render() {
    const text = "WE'RE-WILD-ABOUT-FARMED".split("").map(this.renderText);
    return (
      <div
        className={`Landing-animation-holder ${this.state.holderPop} ${
          this.state.finishPop
        }`}
      >
        <div className="relative">
          <div className="Landing-animation">
            <SVGC
              path={aqquuaLogo.round}
              className={`image ${this.state.logoPop}`}
              fill="#00b6d9"
            />
          </div>
          <div className={`Landing-dot ${this.state.dotPop}`} />
          <h1 className={this.state.wordPop}>{text}</h1>
        </div>
      </div>
    );
  }
}
