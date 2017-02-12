import React, { Component } from 'react';
import '../styles/App.css';

class About extends Component {

  	render() {
  		console.log(this.props.route.path);
    	return (
	      	<div className="">
	      		<h1>THIS IS THE ABOUT PAGE</h1>
	      	</div>
    	);
  	}
}

export default About;
