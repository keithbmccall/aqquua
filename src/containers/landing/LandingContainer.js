import React, { Component } from "react";
import Landing from "../../components/landing/Landing";
import { sectionData, headerContent, contactInfo } from "../../data";

export default class LandingContainer extends Component {
  render() {
    return (
      <Landing
        sectionData={sectionData}
        headerContent={headerContent}
        contactInfo={contactInfo}
      />
    );
  }
}
