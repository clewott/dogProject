import React, { Component } from 'react';
import '../styles/App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div>LOGO GOES HERE</div>
        <div>
        	<button><a href="/signin">Login or Sign Up</a></button>
        </div>
        <div>NAVIGATION GOES HERE</div>
      </div>
    );
  }
}

export default Header;