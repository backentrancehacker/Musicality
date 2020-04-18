import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/MusicalityLogo.svg';
import Question from './Question';
import '../styles/Home.css';

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
					<Link to="/editor">
            <button className="classic btn">Get Started</button>
          </Link>
				</div>
			</main>
			<Link to="/about">
				<Question />
			</Link>
			</>
		)
	}
}
export default Home;