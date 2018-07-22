import React from "react";

const ContentList = props => {
  const { info } = props;
  return (
    <div
      className="Content-info-holder flex"
      style={
        info.backgroundColor
          ? {
              background: info.backgroundColor,
              color: "white"
            }
          : {}
      }
    >
      <div className="Content-list-holder">
        <h4>{info.list.title}</h4>
        <ul>
          {info.list.list.map((item, key) => {
            return (
              <li key={key}>
                <span>{`${key + 1}. `}</span>
                {item}
              </li>
            );
          })}
        </ul>
        <h3>{info.list.closing}</h3>
      </div>
    </div>
  );
};

export default ContentList;
