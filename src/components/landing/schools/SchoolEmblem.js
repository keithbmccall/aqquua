import React from "react";
import { Link } from "react-router-dom";

const SchoolEmblem = props => (
  <div className="flex-1 flex-content-center">
    <Link to={`/university-research/${props.school.name}`}>
      <img
        src={props.school.pic}
        alt={props.school.name}
        className="image School-emblem light-shadow-round"
      />
    </Link>
  </div>
);

export default SchoolEmblem;
