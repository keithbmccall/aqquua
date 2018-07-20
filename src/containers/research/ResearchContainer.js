import React, { Component } from "react";
import WaveAnimation from "../../components/animations/WaveAnimation";
import { researchInfo } from "../../data";
import SVGC from "../../components/tools/images/SVG";

export default class ResearchContainer extends Component {
  render() {
    const info = researchInfo[this.props.match.params.id];
    return (
      <div className="container">
        <WaveAnimation color="white" />
        <div className="Research-container">
          <SVGC path="" />
          <div className="flex collapse-row-column Research-info-holder">
            <div className="flex flex-content-center Research-logo-holder">
              <img src={info.logo} alt={info.logo} className="image" />
            </div>
            <div className="Research-info flex flex-column">
              <h1 style={{ color: info.color }}>{info.title.toUpperCase()}</h1>
              {info.caption.map((p, key) => <p>{p}</p>)}
            </div>
          </div>
          <div className="Research-media">MEDIA CONTENT TO BE ADDED</div>
        </div>
      </div>
    );
  }
}
