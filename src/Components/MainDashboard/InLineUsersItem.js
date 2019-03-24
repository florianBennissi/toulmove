import React from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const InLineUsersItem = ({ onLineUser }) => {
  return (
    <Link to={`/users/${onLineUser.id}`}>
      <div className="inlineuseritem_wrapper">
        <Image size="mini" circular src={onLineUser.photoURL} />
        <span
          className="inlineuseritem_name"
          style={{
            color: `${onLineUser.sex === "M" ? "#66a3ff" : "#ff66ff"}`
          }}
        >
          {onLineUser.pseudo}
        </span>
      </div>
    </Link>
  );
};

export default InLineUsersItem;
