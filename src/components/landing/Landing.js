import React from "react";
import HeaderSection from "./sections/HeaderSection";
import SubHeaderSection from "./sections/SubHeaderSection";
import LandingSection from "./sections/LandingSection";
import { Element } from "react-scroll";
import WaveAnimation from "../animations/WaveAnimation";
import RibbonSection from "./sections/RibbonsSection";
import ContactContainer from "../../containers/contact/ContactContainer";
import RecipesSection from "./sections/RecipesSection";
//
const Landing = props => {
  const { sectionData } = props;
  const renderSections = (item, key) => {
    const index = key;
    return (
      <Element name={item.id} key={key}>
        {index === 0 ? (
          <SubHeaderSection item={item} index={key} />
        ) : item.id === "Recipes" ? (
          <RecipesSection item={item} index={key} />
        ) : (
          <LandingSection item={item} index={key} />
        )}
      </Element>
    );
  };
  const sections = sectionData.map(renderSections);
  return (
    <div className="container Landing-container">
      <WaveAnimation color="#e15d44" />
      <HeaderSection content={props.headerContent} />
      {sections}
      <RibbonSection item={props.ribbons} />
      <Element name="Contact">
        <ContactContainer contactInfo={props.contactInfo} />
      </Element>
    </div>
  );
};

export default Landing;
