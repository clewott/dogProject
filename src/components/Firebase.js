import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBYtoV4M6Mt7FQvpSNDTboYCh_gnIcXHhc",
  authDomain: "dogsite-42aea.firebaseapp.com",
  databaseURL: "https://dogsite-42aea.firebaseio.com",
  storageBucket: "dogsite-42aea.appspot.com",
  messagingSenderId: "299867827949"
};

firebase.initializeApp(config);


var Firebase = Object.assign({}, {

    getPostData: function() {
        const reviewsRef = firebase.database().ref('reviews/dog_beds');
        reviewsRef.on('value', function(snapshot) {
            console.log(snapshot.val());
            snapshot.forEach(function(childSnapshot) {
                console.log(childSnapshot.val());
                return childSnapshot.val();
            })
        })
    }

});

export default Firebase;