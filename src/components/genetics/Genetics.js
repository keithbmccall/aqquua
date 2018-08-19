import React from "react";
import LargeTextWithTitle from "../tools/text/LargeTextWithTitle";
import ContentImages from "../tools/media/ContentImages";
const Genetics = props => {
  const { info } = props;

  return (
    <div className="container">
      <div className="Genetics-container">
        <LargeTextWithTitle info={info} image={info.titleImage} />
        <ContentImages info={info} />
      </div>
    </div>
  );
};

export default Genetics;
