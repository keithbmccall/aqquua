import React, { Component } from "react";

export default class WeAreCarousel extends Component {
  constructor(props) {
    super(props);
  }
  renderContentBricks = (item, key) => {
    const leftRight =
      key < 8
        ? { top: key * 6.67 + "%", left: key * 6.67 + "%" }
        : { top: key * 6.67 + "%", right: (key - 8) * 6.67 + "%" };
    return (
      <h3 key={key} style={leftRight}>
        <span
          className="We-are-rotary"
          style={{
            color: item.color
          }}
        >
          {item.content.toUpperCase()}
        </span>
      </h3>
    );
  };

  render() {
    const { weAreContent } = this.props;
    const content = weAreContent.map(this.renderContentBricks);
    return <div className="We-are-animation">{content}</div>;
  }
}
