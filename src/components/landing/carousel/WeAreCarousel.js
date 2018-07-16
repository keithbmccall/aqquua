import React, { Component } from "react";
import _ from "lodash";

export default class WeAreCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }
  initialState = {
    title: "opacity-0",
    text: _.times(this.props.weAreContent.length, () => "opacity-0 hidden"),
    counter: 0
  };
  renderContentBricks = (item, key) => {
    return (
      <h3
        key={key}
        className={`Wa-text ${this.state.text[key]}`}
        //Wa-${key} or
        //${this.state.text[key]}
        style={{
          top: key * 7 + "%", //6.67
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
    textState[counter] = `Wa-${counter}`;
    return textState;
  };
  textRotary = () => {
    const textInterval = setInterval(
      () =>
        this.state.counter === 15
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
      3000
    );
    setTimeout(
      () =>
        this.setState({
          title: "Wa-title-mid"
        }),
      2000
    );
  };
  ignite = () => {
    this.pushTitle();
    setTimeout(() => this.textRotary(), 3000);
  };
  componentDidMount() {
    this.ignite();
  }
  render() {
    const { weAreContent, title } = this.props;
    const content = weAreContent.map(this.renderContentBricks);
    return (
      <div className="Wa-container flex flex-content-center">
        <h3 className={`Wa-title ${this.state.title}`}>
          {title.toUpperCase()}
        </h3>
        {content}
      </div>
    );
  }
}
