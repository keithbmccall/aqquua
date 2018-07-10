import React, { Fragment } from "react";
import HeaderSection from "../sections/HeaderSection";
import Contact from "../../containers/contact/Contact";
import SubHeaderSection from "../sections/SubHeaderSection";
import LandingSection from "../sections/LandingSection";

const Landing = props => {
  const { sectionData } = props;
  const renderSections = (item, key) => {
    const index = key;
    return index === 0 ? (
      <SubHeaderSection key={key} item={item} />
    ) : (
      <LandingSection key={key} item={item} index={key} />
    );
  };
  const sections = sectionData.map(renderSections);
  return (
    <Fragment>
      <HeaderSection content={props.headerContent} />
      {sections}
      <Contact />
    </Fragment>
  );
};

export default Landing;
