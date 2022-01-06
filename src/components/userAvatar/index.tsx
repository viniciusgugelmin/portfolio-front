import React from "react";

import { FaFacebook, FaLinkedin, FaGithubSquare } from "react-icons/fa";

import logo from "./user.png";

const bgAvatar = {
  color: "white",
  backgroundImage: `url(${logo})`,
  fontSize: 200,
};

export function UserAvatar() {
  return (
    <div className="col-12 alignVertical">
      <div className="userAvatar boxShadow alignVertical">
        <div className="col-4">
          <div className="userAvatar__avatar" style={bgAvatar} />
        </div>
        <div className="col-8">
          <h2>Vinicius Gugelmin</h2>
          <p>Desenvolvedor Back-end</p>
          <div className="col-12 ">
            <FaFacebook />
            <FaLinkedin />
            <FaGithubSquare />
          </div>
        </div>
      </div>
    </div>
  );
}
