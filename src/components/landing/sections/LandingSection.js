import React, { Fragment } from "react";
import ProductsCircleMap from "../products/ProductsCircleMap";
import SchoolEmblem from "../schools/SchoolEmblem";
import SectionNumber from "../section-items/SectionNumber";
import SectionText from "../section-items/SectionText";
import TrackingAnimations from "../../animations/TrackingAnimations";
import EatFishTagIcon from "../eatfish/EatFishTagIcon";
import { withRouter, Link } from "react-router-dom";
// test
import images from "../../../data/images";
import SVGC from "../../tools/images/SVG";

const LandingSection = props => {
  const { item, index } = props;
  console.log(item.backgroundImage && console.log());
  return (
    <div
      className={`flex-column Big-section Big-section-${index}`}
      id={item.id && item.id !== "About" ? item.id : " "}
      style={
        item.backgroundImage
          ? { backgroundImage: `url(${item.backgroundImage})` }
          : {}
      }
    >
      <div className="flex-1 flex-content-center space-10">
        <div
          className={`flex-content-center flex-column ${
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
            <Link to={`/${item.id}`}>
              <SVGC
                path={images.backarrow}
                className="back-arrow image"
                // fill={props.color}
              />
            </Link>
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
                <Fragment>
                  <div className="flex-1 flex-content-center space-10">
                    <EatFishTagIcon item={item.eatFishTag} />
                  </div>
                </Fragment>
              )}
            </TrackingAnimations>
          )}
          {item.fish && <ProductsCircleMap fish={item.fish} />}
        </div>
      </div>
    </div>
  );
};
export default withRouter(LandingSection);
