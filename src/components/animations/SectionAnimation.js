import React, { Component, Fragment } from "react";
import Waypoint from "react-waypoint";
import PropTypes from "prop-types";
export default class SectionAnimation extends Component {
  constructor() {
    super();
    this.state = {
      className: ""
    };
  }
  bounceIn = () => {
    this.setState({
      className: "Section-animation"
    });
  };
  render() {
    const titleContent = () => {
      const { content } = this.props;

      const title =
        content
          .split(" ")
          .slice(0, 2)
          .join(" ") === "WE TAKE" ||
        content
          .split(" ")
          .slice(0, 2)
          .join(" ") === "WE ARE" ? (
          <Fragment>
            <span>
              {content
                .split(" ")
                .slice(0, 2)
                .join(" ")}
            </span>
            <br />
            {" " +
              content
                .split(" ")
                .slice(2)
                .join(" ")}
          </Fragment>
        ) : (
          <Fragment>
            <span>{content.split(" ")[0]}</span>
            <br />
            {" " +
              content
                .split(" ")
                .slice(1)
                .join(" ")}
          </Fragment>
        );

      return (
        <div className="flex flex-1 flex-column">
          <h4
            className={`text-white flex-1 ${this.props.className} ${
              this.state.className
            }`}
          >
            {title}
          </h4>
          {this.props.eatFishTag && this.props.eatFishTag}
        </div>
      );
    };
    const pContent = () => (
      <div
        className={`text-white flex-1 ${this.props.className} ${
          this.state.className
        }`}
      >
        {this.props.content.map((item, key) => <p key={key}>{item}</p>)}
      </div>
    );
    const content =
      this.props.type === ("title" || "Title") ? titleContent() : pContent();

    return (
      <Waypoint
        scrollableAncestor={window}
        onEnter={this.bounceIn}
        bottomOffset={this.props.type === "title" ? "-70%" : "-40%"}
      >
        {content}
      </Waypoint>
    );
  }
}
SectionAnimation.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired
};
