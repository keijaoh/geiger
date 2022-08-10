import React, { Component } from "react";
import { Link } from "react-router-dom";
import banner from "../../styletheme/geiger_assets/Assets/Banners/banner1-bg.png";
import banner_2 from "../../styletheme/geiger_assets/Assets/Banners/banner2-bg.png";
import background from "../../styletheme/geiger_assets/Assets/Art-Images/spot-background.jpg";
import spot_background from "../../styletheme/geiger_assets/Assets/Art-Images/spot-logomark.svg";
import item_1 from "../../styletheme/geiger_assets/Assets/Featured/item1-img.jpg";
import item_2 from "../../styletheme/geiger_assets/Assets/Featured/item2-img.jpg";
import item_3 from "../../styletheme/geiger_assets/Assets/Featured/item3-img.jpg";
import item_4 from "../../styletheme/geiger_assets/Assets/Featured/item4-img.jpg";

class HomePage extends Component {
	state = {};
	async componentDidMount() {
		//set at the top of the screen
		window.scrollTo(0, 0);
	}

	render() {
		//const { bride } = this.state;
		return (
			<React.Fragment>
				{/* Start Banner Need an overlay of the image with transparent background
    ============================================= */}
				<div id='home' className='banner-area text-large'>
					<div
						id='sofolbanner'
						className='carousel slide animate_text text-center'
						data-ride='carousel'>
						{/* Wrapper for slides */}
						<div className='carousel-inner'>
							<div
								className='carousel-item active bg-fixed shadow dark text-light'
								style={{
									height: "400px",
									width: "100%",
									objectFit: "fit",
									backgroundImage: `url(${background})`,
								}}>
								<div
									style={{
										position: "absolute",
										top: "60%",
										left: "50%",
										transform: "translate(-50%, -50%)",
										color: "white",
										fontSize: "27px",
										fontFamily: "Roboto-Extra-Bold",
										fontWeight: "bolder",
										textShadow: "2px 2px #242628",
										width: "60%",
										height: "225px",
										opacity: "0.85",
									}}>
									<div
										className='curvedCornerBackgroundBanner'
										style={{
											left: "50%",
											top: "50px",
										}}>
										<div style={{ paddingTop: "10px" }}>
											<img
												src={spot_background}
												style={{
													width: "250px",
													height: "75px",
													opacity: "1",
												}}
											/>
											<br />
											<div
												style={{
													opacity: "1",
													paddingTop: "15px",
													fontSize: "40px",
													letterSpacing: "0.1px",
												}}>
												MAINE COMMUNITY BANK
												<div
													style={{
														paddingTop: "10px",
														opacity: "1",
														fontSize: "30px",
													}}>
													EMPLOYEE STORE
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* End Wrapper for slides */}
					</div>
				</div>
				{/* End Banner */}
				{/* Start Team Members
    ============================================= */}
				<div id='home' className='banner-area text-large'>
					<div className='container'>
						<div className='row'>
							<div className='text-center'>
								<div className='col-lg-8 offset-lg-2 '>
									<div style={{ paddingTop: "2%" }}>
										<h2 style={{ color: "#303b50 !important" }}>Welcome</h2>
									</div>
									<p
										className='welcomeMessage '
										style={{
											paddingRight: "0px",
										}}>
										The Maine Community Bank Employee Store allows you to order
										from a collection of branded uniforms chosen especially for
										Maine Community Bank. Simply select a category above to
										begin shopping. If you have a question about your order or
										need additional information, please contact your dedicated
										customer service team at
										<span>
											<a
												style={{
													fontFamily: "Roboto-Regular !important",
													fontWeight: "300 !important",
													fontSize: "13px",
													textDecoration: "underline",
													color: "#466fa6",
												}}
												href='tel:+18554191368'>
												1-855-419-1368
											</a>
										</span>
										Representatives are available Monday through Friday from
										8:00 a.m. - 8:00 p.m. EST.
									</p>
								</div>
							</div>
						</div>
						<div id='team' className='team-members-area standard text-center'>
							<div className='container'>
								<div className='row '>
									<div
										className='col-lg-4 col-md-6 item'
										style={{ marginLeft: "auto" }}>
										<div className='team-member'>
											<div className='team-thumb'>
												<div className='container'>
													<img src={banner} alt='Thumb' />

													<div
														style={{
															position: "absolute",
															top: "120%",
															left: "50%",
															transform: "translate(-50%, -50%)",
															color: "white",
															fontSize: "27px",
															fontFamily: "Roboto-Extra-Bold",
															fontWeight: "bolder",
															textShadow: "2px 2px #242628",
														}}>
														Men's Apparel
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										className='col-lg-4 col-md-6 item'
										style={{ marginRight: "auto" }}>
										<div className='team-member'>
											<div className='container'>
												<img src={banner_2} alt='Thumb' />

												<div
													style={{
														position: "absolute",
														top: "120%",
														left: "47%",
														transform: "translate(-50%, -50%)",
														color: "white",
														fontSize: "27px",
														fontFamily: "Roboto-Extra-Bold",
														fontWeight: "bolder",
														textShadow: "2px 2px #242628",
													}}>
													Ladies' Apparel
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Team Members */}

				<div id='feature' className='banner-area text-large'>
					<div className='container'>
						<div className='row' style={{ display: "block" }}>
							<div className='text-center'>
								<div className='col-lg-16 offset-md-1 '>
									<div style={{ paddingTop: "2%" }}>
										<h2 style={{ color: "#303b50 !important" }}>
											Featured Items
										</h2>
									</div>
									<div id='featured_items'>
										<div className='container '>
											<div className='pricing pricing-simple text-center '>
												<div className='row col-lg-9 offset-md-1'>
													<div className='col-md-3 single-item'>
														<div className='curvedCorner pricing-item'>
															<img src={item_1} alt='thumb' />
														</div>
													</div>
													<div className='col-md-3 single-item'>
														<div className='curvedCorner pricing-item'>
															<img src={item_2} alt='thumb' />
														</div>
													</div>

													<div className='col-md-3 single-item'>
														<div className='curvedCorner pricing-item'>
															<img src={item_3} alt='thumb' />
														</div>
													</div>

													<div className='col-md-3 single-item'>
														<div className='curvedCorner pricing-item'>
															<img src={item_4} alt='thumb' />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Team Members */}
			</React.Fragment>
		);
	}
}

export default HomePage;
