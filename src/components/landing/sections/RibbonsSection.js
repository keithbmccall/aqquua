import React from "react";
import TrackingAnimations from "../../animations/TrackingAnimations";

const RibbonSection = props => {
  const renderRibbons = (ribbon, key) => (
    <div className="flex-1" key={key}>
      <TrackingAnimations
        className="absolute"
        type={key === 0 ? "ribbonsLeft" : "ribbonsRight"}
      >
        <img
          src={ribbon.pic}
          className={`Ribbons ${key === 0 ? "Ribbons-left" : "Ribbons-right"}`}
          style={{ background: ribbon.color }}
          alt="Aqquua"
        />
      </TrackingAnimations>
    </div>
  );
  const { item } = props;
  console.log(props)
  const ribbons = item.map(renderRibbons);
  return (
    <div className="flex-column Big-section">
      <div className="flex flex-column Ribbons-container">{ribbons}</div>
    </div>
  );
};
export default RibbonSection;
