import React, { Component } from "react";
import { geneticsInfo } from "../../data";
import Genetics from "../../components/genetics/Genetics";

export default class GeneticsContainer extends Component {
  render() {
    return <Genetics info={geneticsInfo} />;
  }
}
