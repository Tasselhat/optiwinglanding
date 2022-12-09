import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css"
import App from "./App";
import ScrollToTop from "./hooks/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ScrollToTop />
		<App />
	</React.StrictMode>
);
