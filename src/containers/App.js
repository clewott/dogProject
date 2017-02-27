import React, { Component } from 'react';  
import DogApp from './DogApp';

export default class App extends Component {
  	render() {
    	return (
     		<div>
          		<DogApp module={this.props.children}/>
      		</div>
    	);
  	}
}