/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import logo from "./user.png";

const bgAvatar = {
  color: "white",
  backgroundImage: `url(${logo})`,
  fontSize: 200,
};

export function UserAvatar() {
  return (
    <div className="userAvatar alignVertical">
      <div className="col-4">
        <div className="userAvatar__avatar" style={bgAvatar} />
      </div>
      <div className="col-8">
        <h1>nome</h1>
      </div>
    </div>
  );
}
