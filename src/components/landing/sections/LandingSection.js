import React, { Fragment } from "react";
import ProductsCircleMap from "../products/ProductsCircleMap";
import SchoolEmblem from "../schools/SchoolEmblem";
import SectionNumber from "../section-items/SectionNumber";
import SectionText from "../section-items/SectionText";
import TrackingAnimations from "../../animations/TrackingAnimations";
import { withRouter, Link } from "react-router-dom";
// test
import images from "../../../data/images";
import SVGC from "../../tools/images/SVG";
import AnyImageAnimation from "../../animations/AnyImageAnimation";

const LandingSection = props => {
  const { item, index } = props;
  return (
    <div
      className={`flex-column Big-section vh Big-section-${index} ${item.backgroundImage &&
        "Big-background"}`}
      id={item.id || " "}
      style={
        item.backgroundImage
          ? { backgroundImage: `url(${item.backgroundImage})` }
          : {}
      }
    >
      {!item.backgroundImage && (
        <div className="flex-1 flex-content-center space-10">
          <div
            className={`flex-content-center flex-column ${
              item.fish ? "Products-fish-holder" : ""
            }`}
          >
            <SectionText
              caption={item.caption || ""}
              headline={item.headline || ""}
              number={item.number && item.number}
              fish={item.fish && item.fish}
              eatFishTag={item.eatFishTag || null}
            />
            {item.schoolEmblems && (
              <AnyImageAnimation>
                <div className="flex space-10 w-vw">
                  {item.schoolEmblems.map((school, key) => (
                    <SchoolEmblem key={key} school={school} />
                  ))}
                </div>
              </AnyImageAnimation>
            )}
            {item.fish && <ProductsCircleMap fish={item.fish} />}
          </div>
        </div>
      )}
    </div>
  );
};
export default withRouter(LandingSection);
