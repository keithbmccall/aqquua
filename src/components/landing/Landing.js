import React from "react";
import HeaderSection from "./sections/HeaderSection";
import Contact from "../../containers/contact/Contact";
import SubHeaderSection from "./sections/SubHeaderSection";
import LandingSection from "./sections/LandingSection";
import { Element } from "react-scroll";
import WaveAnimation from "../animations/WaveAnimation";
import RibbonSection from "./sections/RibbonsSection";
//
const Landing = props => {
  const { sectionData } = props;
  const renderSections = (item, key) => {
    const index = key;
    return index === 0 ? (
      <div id="About">
        <SubHeaderSection item={item} key={key} />
      </div>
    ) : (
      <LandingSection item={item} index={key} />
    );
  };
  const sections = sectionData.map(renderSections);
  return (
    <div className="container Landing-container">
      {/* <WaveAnimation color="#ffc702" /> */}
      <WaveAnimation color="#ffc702" />
      <HeaderSection content={props.headerContent} />
      {sections}
      <RibbonSection item={props.ribbons} />
      <Contact contactInfo={props.contactInfo} />
    </div>
  );
};

export default Landing;
