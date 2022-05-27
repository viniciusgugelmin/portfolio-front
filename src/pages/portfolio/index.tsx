import { ReactTypical } from "@deadcoder0904/react-typical";
import React from "react";

import Particles from "react-particles-js";

import { NavBar } from "../../components/navBar/index";

export function PortfolioPage() {
	return (
		<div className="container">
			<NavBar name="Welington Moraes" img="./well.jpeg" />

			<div className="portifolio">
				<div className="alignVertical">
					<div className="col-7">
						<div className="portifolio__welcome">
							<p className="portifolio__welcome--subtitle">
								WELCOME TO MY WORLD
							</p>
							<h2 className="portifolio__welcome--title">
								Hi, I’m <span>Welington</span>
								<br />a
								<ReactTypical
									loop={Infinity}
									wrapper="b"
									steps={[
										" Developer",
										4000,
										" Front-End",
										4000,
									]}
								/>
								.
							</h2>
							<p className="portifolio__welcome--description">
								I use animation as a third dimension by which to
								simplify experiences and kuiding thro each and
								every interaction. I’m not adding motion just to
								spruce things up, but doing it in ways that.
							</p>
						</div>
					</div>
					<div className="col-5">
						<Particles />
					</div>
				</div>
			</div>
		</div>
	);
}
