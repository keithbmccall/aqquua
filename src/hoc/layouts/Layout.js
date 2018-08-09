import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import LandingAnimation from "../../components/animations/LandingAnimation";
import PopPageTransition from "../../components/animations/PopPageTransition";
//
class Layout extends Component {
  render() {
    return (
      <Fragment>
        {/* <LandingAnimation /> */}
        <PopPageTransition transition={this.props.transition} />
        {this.props.children}
      </Fragment>
    );
  }
}
export default withRouter(Layout);
