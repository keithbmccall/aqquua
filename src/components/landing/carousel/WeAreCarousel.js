import React, { Component } from "react";
import SVGC from "../../tools/images/SVG";

export default class WeAreCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }
  initialState = {
    title: "opacity-0",
    text: this.props.weAreContent.map(() => "opacity-0-non hidden"),
    counter: 0,
    halfwayMark: " ",
    logoMark: "opacity-0",
    transparentText: " "
  };
  renderContentBricks = (item, key) => {
    return (
      <h3
        key={key}
        className={`Wa-text Wa-${key} ${this.state.text[key]} ${
          key < 15 ? this.state.halfwayMark : " "
        } ${this.state.transparentText}`}
        // ${key < 15 ? this.state.halfwayMark : ""}
        //Wa-${key} or
        // ${this.state.text[key]}
        style={{
          top: key < 15 ? key * 6 + "%" : (key - 15) * 6 + "%", //6.67
          color: item.color
        }}
      >
        {item.content.toUpperCase()}
      </h3>
    );
  };
  //selects new text for next rotation
  setText = counter => {
    let textState = [...this.state.text];
    textState[counter] = `Wa-bricks-${counter}`;
    return textState;
  };
  textRotary = () => {
    const textInterval = setInterval(
      () =>
        // this.state.counter === 35
        //   ? () => {
        //       clearInterval(textInterval);
        //       this.ignite();
        //     }
        //   :
        this.state.counter === 35
          ? this.setState(this.initialState, () => {
              clearInterval(textInterval);
              this.ignite();
            })
          : this.state.counter === 31
            ? this.setState({
                logoMark: "",
                counter: this.state.counter + 1
              })
            : this.state.counter === 30
              ? this.setState({
                  logoMark: "",
                  transparentText: "opacity-0",
                  counter: this.state.counter + 1
                })
              : this.state.counter === 15
                ? this.setState({
                    text: this.setText(this.state.counter),
                    counter: this.state.counter + 1,
                    halfwayMark: "opacity-0"
                  })
                : this.setState({
                    text: this.setText(this.state.counter),
                    counter: this.state.counter + 1
                  }),
      750 //1500
    );
  };
  pushTitle = () => {
    setTimeout(
      () =>
        this.setState({
          title: "Wa-title-fade"
        }),
      3500
    );
    setTimeout(
      () =>
        this.setState({
          title: "Wa-title-mid"
        }),
      500
    );
  };
  ignite = () => {
    this.pushTitle();
    setTimeout(() => this.textRotary(), 1500);
  };
  componentDidMount() {
    this.ignite();
  }
  render() {
    const { weAreContent, title, logo } = this.props;
    // console.log(this.state.counter);
    const content = weAreContent.map(this.renderContentBricks);
    return (
      <div className="Wa-container vh flex flex-content-center">
        <div className={`Wa-h2 centered ${this.state.title}`}>
          <h2 className={`Wa-title`}>
            {title
              .split(" ")
              .splice(0, 1)
              .toString()
              .toUpperCase()}
            <span>
              {title
                .split(" ")
                .splice(1)
                .toString()
                .toUpperCase()}
            </span>
          </h2>
          <div className={`Wa-logo logo ${this.state.logoMark} `}>
            <SVGC fill="#85dbd7" path={logo} className="image" />
          </div>
        </div>
        {/* ${this.state.logoMark} */}
        <div className="Wa-words">{content}</div>
      </div>
    );
  }
}
