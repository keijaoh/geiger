import React, { Component } from "react";
import { Link } from "react-router-dom";
import footer_pattern from "../../../styletheme/geiger_assets/Assets/Art-Images/footer-pattern.png";

const Footer = ({}) => {
	return (
		<React.Fragment>
			<footer
				class='default-padding text-light'
				style={{
					backgroundImage: `url(${footer_pattern})`,
					height: "100px",
					paddingTop: "0px",
				}}>
				<div class='container'>
					{/* Start Footer Bottom */}
					<div class='footer-bottom' style={{ borderTop: 0 }}>
						<div class='row align-center'>
							<div class='col-lg-5'>
								<span style={{ color: "white !important" }}>
									&copy; 2021 Maine Community Bank Employee Store
								</span>
							</div>
							<div class='col-lg-7 text-right'>
								<ul className='nav navbar-nav navbar-right'>
									<li>
										<Link to={""} style={{ color: "white" }}>
											Home
										</Link>
									</li>
									<li>
										<Link style={{ color: "white" }} to={""}>
											My Account
										</Link>
									</li>

									<li>
										<Link style={{ color: "white" }} to={""}>
											FAQs
										</Link>
									</li>

									<li>
										<Link style={{ color: "white" }} to={""}>
											Contact Us
										</Link>
									</li>
									<li>
										<Link style={{ color: "white" }} to={""}>
											Terms of Use
										</Link>
									</li>
									<li>
										<Link style={{ color: "white" }} to={""}>
											Privacy Policy
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/* End Footer Bottom */}
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
