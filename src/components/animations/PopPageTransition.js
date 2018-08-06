import React from "react";
import { aqquuaLogo } from "../../data";
import SVGC from "../tools/images/SVG";
//
const PopPageTransition = props => (
  <div className={`Pop-holder ${props.transition ? "Pop-holder-appear" : " "}`}>
    <div className={`Pop ${props.transition ? "Pop-animation" : " "}`}>
      <SVGC path={aqquuaLogo.round} className="image" fill="#85dbd7" />
    </div>
  </div>
);

export default PopPageTransition;
