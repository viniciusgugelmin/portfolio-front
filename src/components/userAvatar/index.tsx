/* eslint-disable react/destructuring-assignment */
import React from "react";
import { FaFacebook, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export function UserAvatar(props: { name: string; dev: string; img: string }) {
	const bgAvatar = {
		color: "white",
		backgroundImage: `url(${props.img})`,
	};

	return (
		<div className="col-4 alignVertical">
			<div className="userAvatar boxShadow alignVertical">
				<div className="col-12 userAvatar__image">
					<div className="userAvatar__avatar" style={bgAvatar} />
				</div>
				<div className="col-12">
					<h3>{props.name}</h3>
					<p>Desenvolvedor {props.dev}</p>
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
