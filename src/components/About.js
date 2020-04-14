import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import logo from '../images/MusicalityLogo.png';

function wait(ms){
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms);
	})
}
async function sparkle(event){ 
	explode(event.clientX, event.clientY);
}

async function explode(x, y){
	let particles = 15,
		music = document.createElement('div');
	
	music.className = 'music';

	Object.assign(music.style, {
		left: `${x}px`,
		top: `${y}px`,
		transform: 'translate(-50%, -50%)'
	});
	
	document.body.append(music);

	let particleArray = [];
	for(let i = 0; i < particles; i++){ 
		let angle = random(0, 2*Math.PI),
			pX = music.offsetWidth/2 +  random(80, 150) * Math.cos(angle),
			pY = music.offsetHeight/2 + random(80, 150) * Math.sin(angle);


		let particle = document.createElement('div');
		particle.className = 'particle';
		
		particle.innerHTML = `<i class="fas fa-music"></>`;
		
		Object.assign(particle.style, {
			left: `${pX}px`,
			top: `${pY}px`,
			color: `hsl(${random(0, 360)}, 100%, 50%)`,
			transform: `rotate(${random(0,360)}deg)`
		});
		
		music.appendChild(particle);
		particleArray.push(particle);
	}
	await wait(1000);
	for(let particle of particleArray){
		particle.remove();
	}
}
function random(min, max) {
	return Math.floor(Math.random() * (max + 1)) + min;
}
const Outside = (props) => {
	return <a href={props.href} target="blank">{props.name}</a>
}
class About extends Component{
	render(){
		return (
		<>
			<main className="about" onClick={sparkle}>
				<header>
					<Link to="/">
						<img src={logo} alt="Musicality logo" />
					</Link>
					<h1>usicality</h1>
				</header>
				<div className="content fadeIn">
					<h2>What's this?</h2>
					<p>Musicality is a project produced by Nathan, Ethan, Kevin, Joe, and Ryan during <Outside name="NuevaHacks" href="https://www.nuevahacks.com" />. Our team really struggled to come up with a viable solution and problem to solve for this Hackathon. We finally settled with a music generation application, using the power of artificial intelligence.</p>
					<h2>Built with...</h2>
					<p>Besides love, Musicality's main dependencies include <Outside name="React" href="https://reactjs.org"/> and <Outside name="Tensorflow" href="https://www.tensorflow.org"/>. The general languages used to construct the app include Vanilla Javascript (no JQuery), CSS3, and JSX (technically just HTML). We used Netlify to host our React app. </p>
				</div>
        	</main>
			<Link to="/">
            	<h2 className="to-home">Home</h2>
            </Link>
        </>
        )
	}
}

export default About;