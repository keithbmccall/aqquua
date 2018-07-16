import React from "react";

const EatFishTagIcon = props => (
    <div class="flip-container">
      <div class="flipper">
        {props.item.map((tag, key) => (
          <div class={key === 0 ? "front" : "back"} key={key}>
            <img src={tag} alt="Eat Fish" className="image Eat-fish-tag-icon" />
          </div>
        ))}
      </div>
    </div>
   

);

export default EatFishTagIcon;
