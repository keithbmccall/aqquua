import React from "react";
import HeaderSection from "./sections/HeaderSection";
import SubHeaderSection from "./sections/SubHeaderSection";
import LandingSection from "./sections/LandingSection";
import RibbonSection from "./sections/RibbonsSection";
import ContactContainer from "../../containers/contact/ContactContainer";
import RecipesSection from "./sections/RecipesSection";
//
const Landing = props => {
  const { sectionData } = props;
  const renderSections = (item, key) => {
    const index = key;
    return index === 0 ? (
      <SubHeaderSection item={item} index={key} key={key} />
    ) : item.id === "Recipes" ? (
      <RecipesSection item={item} index={key} key={key} />
    ) : (
      <LandingSection item={item} index={key} key={key} />
    );
  };
  const sections = sectionData.map(renderSections);
  return (
    <div className="container Landing-container">
      <HeaderSection content={props.headerContent} />
      {sections}
      {/* <RibbonSection item={props.ribbons} /> */}
      <ContactContainer contactInfo={props.contactInfo} />
    </div>
  );
};

export default Landing;
