import React from "react";
import { Link } from "react-router-dom";

const EatFishTagIcon = props => (
  <Link to="/eatfish">
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
  </Link>
);

export default EatFishTagIcon;
