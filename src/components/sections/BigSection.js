import React, { Fragment } from "react";
import ProductsAnimation from "../animations/ProductsAnimation";
import ProductsCircleMap from "../landing/products/ProductsCircleMap";
import SectionTitleImage from "../tools/text/SectionTitleImage";
import TrackingFade from "../animations/TrackingFade";
import SectionText from "../tools/text/SectionText";

const BigSection = props => {
  const { item, index } = props;
  console.log(index, item);

  return (
    <div
      className={`vh flex-column Big-section Big-section-${index}`}
      id={item.id}
    >
      <div className="flex-1 flex-content-center">
        <div
          className={`flex-content-center flex-column ${
            item.fish ? "Products-fish-holder" : ""
          }`}
        >
          <TrackingFade>
            <div className="collapse-row-column flex-content-center">
              {item.number && (
                <div className="Section-number text-white">{item.number}</div>
              )}
              <SectionText
                text={item.caption}
                headline={item.headline}
                className={`${!item.fish && "text-white"}`}
              />
            </div>
          </TrackingFade>
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
