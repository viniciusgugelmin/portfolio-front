import react from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PortfolioPage } from "./pages/portfolio/index";
import { UserPage } from "./pages/users/index";

function Application() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<UserPage />} />
				<Route path="/portfolio" element={<PortfolioPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Application;
