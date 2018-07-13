import React, { Fragment } from "react";
import HeaderSection from "./sections/HeaderSection";
import Contact from "../../containers/contact/Contact";
import SubHeaderSection from "./sections/SubHeaderSection";
import LandingSection from "./sections/LandingSection";
import { Element } from "react-scroll";
//
const Landing = props => {
  const { sectionData } = props;
  const renderSections = (item, key) => {
    const index = key;

    return index === 0 ? (
      <Element name={item.id} key={key}>
        <SubHeaderSection item={item} key={key} />
      </Element>
    ) : (
      <Element name={item.id && item.id} key={key}>
        <LandingSection item={item} index={key} />
      </Element>
    );
  };
  const sections = sectionData.map(renderSections);
  return (
    <div className="container Landing-container">
      <HeaderSection content={props.headerContent} />
      {sections}
      <Element name="Contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Landing;
