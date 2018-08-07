import React, { Fragment } from "react";
import ProductsCircleMap from "../products/ProductsCircleMap";
import SchoolEmblem from "../schools/SchoolEmblem";
import SectionText from "../section-items/SectionText";
import { withRouter } from "react-router-dom";
import AnyImageAnimation from "../../animations/AnyImageAnimation";

const LandingSection = props => {
  const { item, index } = props;
  console.log(item);
  return (
    <div
      className={`flex-column Big-section vh Big-section-${index} ${item.backgroundImage &&
        "Big-background"}`}
      id={item.id || " "}
    >
      {!item.backgroundImage ? (
        <div className="flex-1 flex-content-center space-10">
          <div
            className={`flex-content-center flex-column ${
              item.fish ? "Products-fish-holder" : ""
            }`}
          >
            <SectionText
              caption={item.caption || ""}
              headline={item.headline || ""}
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
      ) : (
        <img src={item.backgroundImage} className="image" />
      )}
    </div>
  );
};
export default withRouter(LandingSection);
