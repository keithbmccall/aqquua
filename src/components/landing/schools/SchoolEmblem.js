import React from "react";
import { Link } from "react-router-dom";

const SchoolEmblem = props => {
  const { school } = props;
  return (
    <div className="flex-1 flex-content-center">
      <Link to={`schools/${school.name}`}>
        <img src={school.pic} alt={school.name} className="image" />
      </Link>
    </div>
  );
};
export default SchoolEmblem;
