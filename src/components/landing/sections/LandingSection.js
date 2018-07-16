import React from "react";
import ProductsCircleMap from "../products/ProductsCircleMap";
import SchoolEmblem from "../schools/SchoolEmblem";
import SectionNumber from "../section-items/SectionNumber";
import SectionText from "../section-items/SectionText";
import TrackingAnimations from "../../animations/TrackingAnimations";
import EatFishTagIcon from "../eat-fish/EatFishTagIcon";
//
const LandingSection = props => {
  const { item, index } = props;
  return (
    <div className={`flex-column Big-section Big-section-${index}`}>
      <div className="flex-1 flex-content-center space-10">
        <div
          className={`flex-content-center flex-column  ${
            item.fish ? "Products-fish-holder" : ""
          }`}
        >
          <div className="collapse-row-column flex-1">
            {item.number && <SectionNumber content={item.number} />}
            <SectionText
              caption={item.caption}
              headline={item.headline}
              number={item.number}
              fish={item.fish}
            />
          </div>
          {(item.schoolEmblems || item.eatFishTag) && (
            <TrackingAnimations type="sectionFade">
              {item.schoolEmblems ? (
                <div className="flex space-10 w-vw">
                  {item.schoolEmblems.map((school, key) => (
                    <SchoolEmblem key={key} school={school} />
                  ))}
                </div>
              ) : (
                <div className="flex-1 flex-content-center space-10">
                  <EatFishTagIcon item={item.eatFishTag} />
                </div>
              )}
            </TrackingAnimations>
          )}
          {item.fish && <ProductsCircleMap fish={item.fish} />}
        </div>
      </div>
    </div>
  );
};
export default LandingSection;
