import React, { Component } from "react";
import { eatFishInfo } from "../../data";
import EatFish from "../../components/eatfish/EatFish";

export default class EatFishContainer extends Component {
  render() {
    return <EatFish info={eatFishInfo} />;
  }
}
