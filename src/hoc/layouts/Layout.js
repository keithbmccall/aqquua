import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import PopPageTransition from "../../components/animations/PopPageTransition";
//
class Layout extends Component {
  render() {
    return (
      <Fragment>
        <PopPageTransition transition={this.props.transition} />
        {this.props.children}
      </Fragment>
    );
  }
}

export default withRouter(Layout);
