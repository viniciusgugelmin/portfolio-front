/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import { UserAvatar } from "../../components/userAvatar/index";

export function UserPage() {
	return (
		<div className="container">
			<div className="container__heightFull alignVertical">
				<UserAvatar
					name="Vinicius Gugelmin"
					dev="Back-end"
					img="./vini.jpg"
				/>
				<UserAvatar
					name="Welington Moraes"
					dev="Front-end"
					img="./well.jpeg"
				/>
			</div>
		</div>
	);
}
