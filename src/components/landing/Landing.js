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
    return (
      <Element name={item.id && item.id} key={key}>
        {index === 0 ? (
          <SubHeaderSection item={item} key={key} />
        ) : index === 1 ? (
          <RibbonSection item={item} key={key} />
        ) : (
          <LandingSection item={item} index={key} />
        )}
      </Element>
    );
  };
  const sections = sectionData.map(renderSections);
  return (
    <div className="container Landing-container">
      <WaveAnimation color="#ffc702" />
      <HeaderSection content={props.headerContent} />
      {sections}
      <Element name="Contact">
        <Contact contactInfo={props.contactInfo} />
      </Element>
    </div>
  );
};

export default Landing;
