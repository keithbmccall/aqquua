import React, { Component, Fragment } from "react";
import NavbarContainer from "../../containers/navbar/NavbarContainer";
import scrollToComponent from "react-scroll-to-component";

//
export default class Layout extends Component {
  render() {
    return (
      <Fragment>
        <main>{this.props.children}</main>
      </Fragment>
    );
  }
}
