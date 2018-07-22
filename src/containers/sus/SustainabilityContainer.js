import React, { Component } from "react";
import { sustainabilityInfo } from "../../data";
import Sustainability from "../../components/sus/Sustainability";
//
export default class SustainabilityContainer extends Component {
  render() {
    return <Sustainability info={sustainabilityInfo} />;
  }
}
