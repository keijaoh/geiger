import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import React, { Component } from "react";
import HomePage from "./components/public_pages/homepage";
import NavBar from "./components/reuseable/navigation/navbar";
import Footer from "./components/reuseable/navigation/footer";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
	state = {};

	async componentDidMount() {}

	render() {
		const {} = this.state;
		return (
			<React.Fragment>
				<main>
					<NavBar />
					<section className='blog-details-area pt-100 pb-100'>
						<div className='container'>
							<Switch>
								<Route path='/' exact component={HomePage} />
							</Switch>
						</div>
					</section>

					<Footer />
				</main>
			</React.Fragment>
		);
	}
}

export default App;
