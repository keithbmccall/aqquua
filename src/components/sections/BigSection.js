import React from "react";
import ProductsCircleMap from "../landing/products/ProductsCircleMap";
import TrackingFade from "../animations/TrackingFade";
import SectionText from "../tools/text/SectionText";
import TrackingFadeNumber from "../animations/TrackingFadeNumber";
import SchoolEmblem from "../landing/schools/SchoolEmblem";

//
const BigSection = props => {
  const { item, index } = props;
  console.log(item);
  return (
    <div
      className={`vh flex-column Big-section Big-section-${index}`}
      id={item.id}
    >
      <div className="flex-1 flex-content-center space-10">
        <div
          className={`flex-content-center flex-column  ${
            item.fish ? "Products-fish-holder" : ""
          }`}
        >
          <div className="collapse-row-column flex-1">
            {item.number && (
              <div className="flex-1 Section-number-holder flex">
                <TrackingFadeNumber>
                  <div className="Section-number text-white flex-1">
                    {item.number}
                    <span>.</span>
                  </div>
                </TrackingFadeNumber>
              </div>
            )}

            <div className="flex-1 flex Section-text-holder">
              <TrackingFade
                className={`${!item.number && "flex-content-center"}`}
              >
                <div className="flex flex-1 flex-content-center">
                  <SectionText
                    text={item.caption}
                    headline={item.headline}
                    className={`${!item.fish &&
                      "text-white"} flex-1 flex-column`}
                  />
                </div>
              </TrackingFade>
            </div>
          </div>
          {item.schoolEmblems && (
            <TrackingFade>
              <div className="flex space-10 w-vw">
                {item.schoolEmblems.map((school, key) => (
                  <SchoolEmblem key={key} school={school} />
                ))}
              </div>
            </TrackingFade>
          )}
          {item.fish && (
            <div className="Products-fish">
              <ProductsCircleMap fish={item.fish} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BigSection;
