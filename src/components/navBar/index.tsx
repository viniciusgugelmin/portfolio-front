/* eslint-disable react/destructuring-assignment */
import React from "react";
import { FaFacebook, FaLinkedin, FaGithubSquare } from "react-icons/fa";

export function NavBar(props: { name: string; img: string }) {
	const bgAvatar = {
		color: "white",
		backgroundImage: `url(${props.img})`,
	};

	return (
		<div className="navBar col-12">
			<div className="flex container">
				<div className="col-2 alignVertical">
					<div className="col-4 navBar__nav--user">
						<div className="navBar__nav--avatar" style={bgAvatar} />
					</div>
					<div className="col-8">
						<p>{props.name}</p>
					</div>
				</div>
				<div className="col-10 alignVertical">
					<ul className="navBar__nav flex">
						<li className="navBar__nav--item">
							<a className="link" href="#home">
								Home
							</a>
						</li>
						<li className="navBar__nav--item">
							<a className="link" href="#features">
								Features
							</a>
						</li>
						<li className="navBar__nav--item">
							<a className="link" href="#portfolio">
								Portfolio
							</a>
						</li>
						<li className="navBar__nav--item">
							<a className="link" href="#resume">
								Resume
							</a>
						</li>
						<li className="navBar__nav--item">
							<a className="link" href="#clients">
								Clients
							</a>
						</li>
						<li className="navBar__nav--item">
							<a className="link" href="#pricing">
								Pricing
							</a>
						</li>
						<li className="navBar__nav--item">
							<a className="link" href="#blog">
								blog
							</a>
						</li>
						<li className="navBar__nav--item">
							<a className="link" href="#contacts">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
