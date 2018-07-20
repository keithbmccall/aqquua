import React, { Component } from "react";

export default class WeAreCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }
  initialState = {
    title: "opacity-0",
    text: this.props.weAreContent.map(() => "opacity-0 hidden"),
    counter: 0
  };
  renderContentBricks = (item, key) => {
    return (
      <h3
        key={key}
        className={`Wa-text Wa-${key}`}
        //Wa-${key} or
        // ${this.state.text[key]}
        style={{
          top: key * 3.38 + "%", //6.67
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
        this.state.counter === 29
          ? this.setState(this.initialState, () => {
              clearInterval(textInterval);
              this.ignite();
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
    const { weAreContent, title } = this.props;
    const content = weAreContent.map(this.renderContentBricks);
    return (
      <div className="Wa-container vh flex flex-content-center">
        <h3 className={`Wa-title centered ${this.state.title} `}>
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
        </h3>
        <div className="Wa-words">{content}</div>
      </div>
    );
  }
}
