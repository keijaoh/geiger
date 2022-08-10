import React, { Component, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../styletheme/geiger_assets/Assets/Art-Images/MCBF-logo.svg";
import styled from "styled-components";
import "../../../styletheme/web/assets/css/bootstrap.min.css";
import "../../../styletheme/web/assets/css/bootsnav.css";
import search from "../../../styletheme/geiger_assets/Assets/Icons/search.png";
import arrow from "../../../styletheme/geiger_assets/Assets/Icons/arrow.png";
import shoping_cart from "../../../styletheme/geiger_assets/Assets/Icons/shopping_cart.png";
import "../../../styletheme/geiger_assets/Assets/Css/geigerFonts.css";

const NavBar = ({}) => {
	const itemCount = 0;
	const cartTotal = "0.00";

	//mobile start
	const COLORS = {
		primaryDark: "#8ca7cb",
		primaryLight: "#8ca7cb",
		menuBackground: "#8ca7cb",
		textPrimaryColor: "#fff",
	};

	const MenuLabel = styled.label`
		background-color: ${COLORS.primaryDark};
		position: fixed;
		top: 0.5rem;
		right: 0.5rem;
		border-radius: 50%;
		height: 50px;
		width: 50px;
		cursor: pointer;
		z-index: 1000;

		box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
		text-align: center;
	`;

	const NavBackground = styled.div`
		position: fixed;
		top: 6.5rem;
		right: 6.5rem;
		background-image: radial-gradient(
			${COLORS.primaryDark},
			${COLORS.menuBackground}
		);
		height: 6rem;
		width: 6rem;
		border-radius: 50%;
		z-index: 600;
		transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
		transition: transform 0.8s;
	`;

	const Navigation = styled.nav`
		height: 100vh;
		position: fixed;
		top: 0;
		right: 0;
		z-index: 600;
		width: ${(props) => (props.clicked ? "100%" : "0")};
		opacity: ${(props) => (props.clicked ? "1" : "0")};
		transition: width 0.8s, opacity 0.8s;
	`;

	const List = styled.ul`
		position: absolute;
		list-style: none;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		width: 100%;
	`;
	const ItemLink = styled(NavLink)`
		display: inline-block;
		font-size: 2rem;
		font-weight: 500;
		text-decoration: none;
		color: ${COLORS.textPrimaryColor};
		padding: 0.5rem 2rem;
		background-image: linear-gradient(
			120deg,
			transparent 0%,
			transparent 50%,
			#fff 50%
		);
		background-size: 240%;
		transition: all 0.4s;
		&:hover,
		&:active {
			background-position: 100%;
			color: ${COLORS.primaryDark};
			transform: translateX(1rem);
		}
	`;

	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	//mobbile end

	return (
		<React.Fragment>
			<div className='top-bar-area ' style={{ backgroundColor: "#eecc76" }}>
				<div className='container'>
					<div className='topbar-info'>
						<div className='row'>
							<div className='top-address col-lg-8 text-right'>
								<ul>
									<li>
										<Link className='geigerLight' to={"#"}>
											Welcome User!
										</Link>
									</li>
									<li>
										<Link to={"#"}>Log Out</Link>
									</li>
									<li>
										<Link to={"#"}>My Account</Link>
									</li>
									<li>
										<Link to={"#"}>Order History</Link>
									</li>
									<li>
										<Link to={"#"}>Wish List</Link>
									</li>
								</ul>
							</div>
							<div className='topbar-social text-right col-lg-3'>
								<ul
									className='text-center'
									style={{ backgroundColor: "white" }}>
									<li>
										<a href='#'>
											<span>
												<img src={shoping_cart} /> Items: {itemCount}
											</span>
										</a>
									</li>
									<li>
										<a href='#'>
											<span>Total: ${cartTotal}</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* End Header Top */}

			{/* Header 
    ============================================= */}
			<header>
				{/* Start Navigation */}
				<nav className='navbar navbar-default navbar-sticky bootsnav'>
					<div className='container'>
						{/* Start Header Navigation */}
						<div className='navbar-header'>
							<MenuLabel
								type='button'
								className='navbar-toggle'
								data-toggle='collapse'
								onClick={handleClick}
								htmlFor='navi-toggle'
								data-target='#navbar-menu'>
								<i className='fa fa-bars'></i>
							</MenuLabel>

							<NavBackground clicked={click}>&nbsp;</NavBackground>
							<Link className='navbar-brand' to={"/"}>
								<img src={logo} className='logo' alt='Logo' />
							</Link>
						</div>
						{/* End Header Navigation */}
						{/* Collect the nav links, forms, and other content for toggling */}
						<div className='collapse navbar-collapse' id='navbar-menu'>
							<ul
								className='nav navbar-nav navbar-right'
								data-in='#'
								data-out='#'>
								<li className='dropdown'>
									<Link
										href='#'
										className='dropdown-toggle'
										data-toggle='dropdown'>
										CATEGORIES
									</Link>
									<ul className='dropdown-menu'>
										<li>
											<Link to={""}>Ladies'</Link>
										</li>
										<li>
											<Link to={""}>Men's</Link>
										</li>
										<li>
											<Link to={""}>Dress Shirts</Link>
										</li>
										<li>
											<Link to={""}>Outerwear</Link>
										</li>
										<li>
											<Link to={""}>Polos</Link>
										</li>
										<li>
											<Link to={""}>
												<span
													style={{
														fontFamily: "Roboto-Regular !important",
														fontWeight: "300 !important",
														fontSize: "13px",
														textDecoration: "underline",
														color: "#466fa6",
													}}>
													View All
												</span>
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<a href='about.html'>FAQS</a>
								</li>
								<li>
									<a href='services.html'>CONTACT US</a>
								</li>
								<li style={{ paddingTop: "25px", paddingBottom: "15px" }}>
									<input
										className='nosubmit'
										type='search'
										placeholder='Search'></input>
								</li>
							</ul>
						</div>
						{/* /.navbar-collapse */}
						<div className='btn-box'>
							<Navigation clicked={click}>
								<List>
									<li>
										<ItemLink
											onClick={handleClick}
											to='/'
											className='sub-menu-item'>
											CATEGORIES
										</ItemLink>
									</li>

									<li>
										<ItemLink
											onClick={handleClick}
											to='/'
											className='sub-menu-item'>
											{" "}
											FAQS
										</ItemLink>
									</li>
									<li>
										<ItemLink
											onClick={handleClick}
											to='/'
											className='sub-menu-item'>
											{" "}
											CONTACT US
										</ItemLink>
									</li>
								</List>
							</Navigation>
						</div>
					</div>
				</nav>
				{/* End Navigation */}
			</header>
			{/* End Header */}
		</React.Fragment>
	);
};

export default NavBar;
