import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import './styles/global.css';

import Home from './components/Home';
import About from './components/About';

class App extends Component {
	render(){
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
				</Switch>
			</Router>
		)
	}
}
export default App;