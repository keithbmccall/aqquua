import React, { Component } from "react";
import { farmInfo } from "../../data";
import Farm from "../../components/farm/Farm";


export default class FarmContainer extends Component {
  render() {
    return (
      <Farm info={farmInfo}/>
    );
  }
}
