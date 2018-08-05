import React from "react";
import BackArrow from "../../components/tools/images/BackArrow";
import LargeTextWithTitle from "../tools/text/LargeTextWithTitle";
import ContentImages from "../tools/media/ContentImages";
const Genetics = props => {
  const { info } = props;

  return (
    <div className="container">
      <div className="Genetics-container">
        <BackArrow color={info.titleColor} />
        <LargeTextWithTitle info={info} />
        <ContentImages info={info} />
      </div>
    </div>
  );
};

export default Genetics;
