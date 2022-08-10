import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import "../src/styletheme/web/assets/css/bootsnav.css";
import "../src/styletheme/web/style.css";
import "../src/styletheme//web/assets/css/bootstrap.min.css";

import "../src/styletheme/geiger_assets/Assets/Css/geigerFonts.css";

import "../src/styletheme/web/assets/css/font-awesome.min.css";
import "../src/styletheme/web/assets/css/themify-icons.css";
import "../src/styletheme/web/assets/css/flaticon-set.css";
import "../src/styletheme/web/assets/css/elegant-icons.css";
import "../src/styletheme/web/assets/css/magnific-popup.css";
import "../src/styletheme/web/assets/css/owl.carousel.min.css";
import "../src/styletheme/web/assets/css/owl.theme.default.min.css";
import "../src/styletheme/web/assets/css/animate.css";

import "../src/styletheme/web/assets/css/responsive.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
