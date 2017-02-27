import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyBYtoV4M6Mt7FQvpSNDTboYCh_gnIcXHhc",
    authDomain: "dogsite-42aea.firebaseapp.com",
    databaseURL: "https://dogsite-42aea.firebaseio.com",
    storageBucket: "dogsite-42aea.appspot.com",
    messagingSenderId: "299867827949"
}

firebase.initializeApp(config);

export const firebaseAuth = firebase.auth;