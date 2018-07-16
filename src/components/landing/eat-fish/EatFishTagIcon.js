import React from "react";

const EatFishTagIcon = props => (
  <div class={props.index === 0 ? "front" : "back"}>
    <img src={props.tag} className="image" />
  </div>
);

export default EatFishTagIcon;
