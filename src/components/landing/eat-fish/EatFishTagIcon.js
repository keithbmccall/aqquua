import React from "react";

const EatFishTagIcon = props => (
  <div className="Eat-fish-flip-container">
    <div className="Eat-fish-flipper">
      {props.item.map((tag, key) => (
        <div
          className={key === 0 ? "Eat-fish-front" : "Eat-fish-back"}
          key={key}
        >
          <img src={tag} alt="Eat Fish" className="image Eat-fish-tag-icon" />
        </div>
      ))}
    </div>
  </div>
);

export default EatFishTagIcon;
