import React from "react";

const LargeTextWithTitle = props => {
  const { info } = props;
  return (
    <div className="flex Content-info-holder space-10">
      <div className="Content-info flex-column flex-1">
        <div>
          <h1 style={{ color: info.titleColor }}>{info.title.toUpperCase()}</h1>
          {info.subTitle && <h2>{info.subTitle}</h2>}
          {info.caption.map((p, key) => <p key={key}>{p}</p>)}
        </div>
      </div>
    </div>
  );
};
export default LargeTextWithTitle;
