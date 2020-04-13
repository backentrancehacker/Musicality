import React, { Component } from 'react';
import './styles/global.css';
import './styles/App.css';
import logo from './images/MusicalityLogo.svg';

class App extends Component {
	render(){
		return (
			<main>
				<div className="center-piece">
					<img id="logo" src={logo} alt="Musicality logo"/>
					<h1>USICALITY</h1>
				</div>
				<p className="sub-title">Generate music because AI can.</p>
				<div className="center-piece">
					<button className="btn">Get Started</button>
				</div>
			</main>
		)
	}
}
export default App;
