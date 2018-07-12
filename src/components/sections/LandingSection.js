import React, { Component } from "react";
import ProductsCircleMap from "../landing/products/ProductsCircleMap";
import TrackingFade from "../animations/TrackingFade";
import SchoolEmblem from "../landing/schools/SchoolEmblem";
import SectionNumber from "../landing/section-items/SectionNumber";
import SectionText from "../landing/section-items/SectionText";
import Landing from "../landing/Landing";

//
export default class LandingSection extends Component {
  render() {
    const props = this.props;
    const { item, index } = props;
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
              {item.number && <SectionNumber content={item.number} />}
              <SectionText
                caption={item.caption}
                headline={item.headline}
                number={item.number}
                fish={item.fish}
              />
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
            {item.fish && <ProductsCircleMap fish={item.fish} />}
          </div>
        </div>
      </div>
    );
  }
}
