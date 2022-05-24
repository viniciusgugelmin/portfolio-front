import React from "react";

import "./App.css";

import { UserAvatar } from "./components/userAvatar/index";
import { Portifolio } from "./pages/portifolio/index";

function App() {
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

export default App;
