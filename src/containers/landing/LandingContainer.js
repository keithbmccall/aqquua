import React, { Component } from "react";
import Landing from "../../components/landing/Landing";
import { sectionData, headerContent, contactInfo, ribbons } from "../../data";

export default class LandingContainer extends Component {
  componentDidMount() {
    this.props.countLandingMounts();
  }
  render() {
    return (
      <Landing
        landingCount={this.props.landingCount}
        sectionData={sectionData}
        headerContent={headerContent}
        contactInfo={contactInfo}
        ribbons={ribbons}
      />
    );
  }
}
