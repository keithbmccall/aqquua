import React, { Component } from "react";
import Landing from "../../components/landing/Landing";

export default class LandingContainer extends Component {
  render() {
    return (
      <Landing
        sectionData={this.props.sectionData}
        headerContent={this.props.headerContent}
      />
    );
  }
}
