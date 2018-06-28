import React, { Fragment } from "react";
import BigSection from "../sections/BigSection";
import HeaderSection from "../sections/HeaderSection";
import Contact from "../../containers/contact/Contact";
import SubHeaderSection from "../sections/SubHeaderSection";

const Landing = props => {
  const { sectionData } = props;
  const renderSections = (item, key) => {
    const index = key;
    return index === 0 ? (
      <SubHeaderSection key={key} item={item} />
    ) : (
      <BigSection key={key} item={item} index={key} />
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
