import React from "react";

const PopPageTransition = props => (
  <div className={`Pop-holder ${props.transition ? "Pop-holder-appear" : " "}`}>
    <div className={`Pop ${props.transition ? "Pop-animation" : " "}`} />
  </div>
);

export default PopPageTransition;
