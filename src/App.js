import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import './styles/global.css';
import './styles/App.css';
import logo from './images/MusicalityLogo.png';
import Question from './components/Question';

class Home extends Component {
	render(){
		return (
			<>
			<main className="home fadeIn">
				<div className="center-piece">
					<img id="logo" src={logo} alt="Musicality logo"/>
					<h1>USICALITY</h1>
				</div>
				<p className="sub-title">Generate music because AI can.</p>
				<div className="center-piece">
					<button className="classic btn">Get Started</button>
				</div>
			</main>
			<Link to="/about">
				<Question />
			</Link>
			</>
		)
	}
}



class App extends Component {
	render(){
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">

					</Route>
				</Switch>
			</Router>
		)
	}
}
export default App;