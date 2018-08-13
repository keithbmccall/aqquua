import React from "react";
import { aqquuaLogo } from "../../data";
import SVGC from "../tools/images/SVG";
//
const PopPageTransition = props => (
  <div className={`Pop-holder ${props.transition ? "animation" : " "}`}>
    <div>
      <div className="Pop">
        <SVGC path={aqquuaLogo.round} className="image" fill="#85dbd7" />
      </div>
    </div>
  </div>
);

export default PopPageTransition;
