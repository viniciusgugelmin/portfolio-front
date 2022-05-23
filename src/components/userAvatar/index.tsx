import React from "react";
import { FaFacebook, FaLinkedin, FaGithubSquare } from "react-icons/fa";

import logo from "./user.png";

const bgAvatar = {
	color: "white",
	backgroundImage: `url(${logo})`,
	fontSize: 200,
};

export function UserAvatar() {
	const url = "";

	return (
		<div className="col-16 alignVertical">
			<div className="userAvatar boxShadow alignVertical">
				<div className="col-12 userAvatar__image">
					<div className="userAvatar__avatar" style={bgAvatar} />
				</div>
				<div className="col-12">
					<h2>Vinicius Gugelmin</h2>
					<p>Desenvolvedor Back-end</p>
					<div className="col-12 userAvatar__avatar--socialRedes">
						<FaFacebook />
						<FaLinkedin />
						<FaGithubSquare />
					</div>
				</div>
			</div>
		</div>
	);
}
