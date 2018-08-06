import React from "react";
import ContentImages from "../tools/media/ContentImages";
//
const Research = props => {
  const { info } = props;

  return (
    <div className="container">
      <div className="Research-container">
        <div className="flex collapse-row-column Research-info-holder">
          <div className="flex flex-content-center Research-logo-holder">
            <img src={info.logo} alt={info.logo} className="image" />
          </div>
          <div className="Research-info flex flex-column">
            <h1 style={{ color: info.color }}>{info.title.toUpperCase()}</h1>
            {info.caption.map((p, key) => <p key={key}>{p}</p>)}
          </div>
        </div>
        {info.bigImage && (
          <img src={info.bigImage} className="image Research-big" />
        )}
        {info.images && <ContentImages info={info} />}
      </div>
    </div>
  );
};
export default Research;
