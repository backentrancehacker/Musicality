import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/MusicalityLogo.svg';
import '../styles/Editor.css';

const Header = () => {
  return (
    <header>
      <Link to="/"><img src={logo} alt="Musicality logo"/></Link>
      <div>
        <h1>usicality</h1>
        <div>
          <span>File</span>
          <span>Generate</span>
        </div>
      </div>
    </header>
  )
}
const Left = () => {
  return(
    <div id="left">

    </div>
  )
}
const Right = () => {
  return(
    <div id="right"> 
      <div id="tools"> 
        <div id="eraser"> 
          <i className="fas fa-eraser"></i> 
        </div>
        <div id="pen"> 
          <i className="fas fa-pen"></i> 
        </div> 
        <div id="color"> 
          <i className="fas fa-palette"></i>
        </div> 
      </div> 
      <div id="drawing-zone">
      </div> 
    </div>
  )
}
class Editor extends Component {
	render(){
		return (
			<main className="editor">
        <Header />
        <div className="container">
          <Left />
          <Right />
        </div>
		
		  <input id="file" type='file' accept=".muse" />
			</main>
		)
	}
}

export default Editor;