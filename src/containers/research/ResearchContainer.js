import React, { Component } from "react";
import { researchInfo } from "../../data";
import Research from "../../components/research/Research";

export default class ResearchContainer extends Component {
  render() {
    const info = researchInfo[this.props.match.params.id];
    return <Research info={info} />;
  }
}
