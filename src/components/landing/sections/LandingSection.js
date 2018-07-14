import React, { Component } from "react";
import ProductsCircleMap from "../products/ProductsCircleMap";
import TrackingFade from "../../animations/TrackingFade";
import SchoolEmblem from "../schools/SchoolEmblem";
import SectionNumber from "../section-items/SectionNumber";
import SectionText from "../section-items/SectionText";
import { RibbonsL, RibbonsR } from "../../animations/Ribbons";
//
export default class LandingSection extends Component {
  render() {
    const { item, index } = this.props;
    return (
      <div
        className={`flex-column Big-section Big-section-${index}`}
        id={item.id}
      >
        {item.ribbons ? (
          <div className="flex flex-column Ribbons-container">
            {item.ribbons.map((ribbon, key) => (
              <div
                className="flex-1"
                style={{ background: ribbon.color }}
                key={key}
              >
                {key === 0 ? (
                  <RibbonsL className="absolute">
                    <img src={ribbon.pic} className={`Ribbons Ribbons-Left`} />
                  </RibbonsL>
                ) : (
                  <RibbonsR className="absolute">
                    <img src={ribbon.pic} className={`Ribbons Ribbons-Right`} />
                  </RibbonsR>
                )}{" "}
              </div>
            ))}
          </div>
        ) : (
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
        )}
      </div>
    );
  }
}
