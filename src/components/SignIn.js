import React, { Component } from 'react';
import firebase from 'firebase';
import '../styles/App.css';

const firebaseui = global.firebaseui;

const uiConfig = {
  'signInSuccessUrl': '/',
  'signInOptions': [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  'tosUrl': '<your-tos-url>',
};

class SignIn extends Component {
	render() {
		const authUi = new firebaseui.auth.AuthUI(firebase.auth());
		// The start method will wait until the DOM is loaded.
		authUi.start('#firebaseui-auth-container', uiConfig);
		return (
			<div className="App">
				<div id="firebaseui-auth-container"></div>
			</div>
		);
	}
}

export default SignIn;
