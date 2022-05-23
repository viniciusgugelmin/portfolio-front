import React from "react";

import "./App.css";
import { UserAvatar } from "./components/userAvatar/index";

function App(): JSX.Element {
	return (
		<div className="container">
			<div className="container__heightFull alignVertical">
				<UserAvatar name="Vinicius Gugelmin" dev="Back-end" />
				<UserAvatar name="Welington Moraes" dev="Front-end" />
			</div>
		</div>
	);
}

export default App;
