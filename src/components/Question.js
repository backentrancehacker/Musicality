import React, {Component} from 'react';

const styles = {
	position: 'fixed',
	bottom: '1em',
	left: '1em',
	borderRadius: '50%',
	backgroundColor: 'silver',
	color: '#fff',
	padding: '0.5em',
	height: '2.5em',
	width: '2.5em',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	cursor: 'pointer'
}

class Question extends Component {
	render(){
		return(
			<div style={styles}>
				<i className="fas fa-question"></i>
			</div>
		)
	}
}
export default Question;
