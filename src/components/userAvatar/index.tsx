/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import logo from "./vini.jpg";

const bgAvatar = {
  color: "white",
  backgroundImage: `url(${logo})`,
  fontSize: 200,
};

export function UserAvatar() {
  return (
    <div className="userAvatar boxShadow alignVertical">
      <div className="col-4">
        <div className="userAvatar__avatar" style={bgAvatar} />
      </div>
      <div className="col-8">
        <h2>Vinicius Gugelmin</h2>
        <p>Desenvolvedor Back-end</p>
      </div>
    </div>
  );
}
