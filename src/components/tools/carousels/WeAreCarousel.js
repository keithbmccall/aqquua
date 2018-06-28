import React, { Component } from "react";

export default class WeAreCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      opacity: 0,
      visibility: "hidden",
      width: "343px"
    };
  }
  carousel = (array, callback) => {
    setTimeout(() => callback(), 2500); //opacitychanger
    setTimeout(() => this.rotaryText(array, callback), 10000);
  };
  rotaryText = (array, callback) =>
    this.setState(
      {
        counter:
          this.state.counter === array.length - 1 ? 0 : this.state.counter + 1
      },
      callback()
    );

  opacityChanger = () =>
    this.setState({
      opacity: this.state.opacity === 1 ? 0 : 1,
      visibility: this.state.visibility === "inherit" ? "hidden" : "inherit"
    });

  componentDidMount() {
    this.carousel(this.props.weAreContent, this.opacityChanger);
    setInterval(
      () => this.carousel(this.props.weAreContent, this.opacityChanger),
      10000
    );
  }
  render() {
    const { weAreContent } = this.props;
    return (
      <div className="We-are-animation" style={{ width: this.state.width }}>
        <h3>
          <span className="We-are">{`${this.props.title.toUpperCase()} `}</span>
          <span
            className="We-are-rotary"
            style={{
              opacity: this.state.opacity,
              visibility: this.state.visibility,
              color: weAreContent[this.state.counter].color
            }}
          >
            {weAreContent[this.state.counter].content.toUpperCase()}
          </span>
        </h3>
      </div>
    );
  }
}
