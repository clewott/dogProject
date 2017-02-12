import React from 'react';
import * as firebase from 'firebase';
import CreatePosts from './CreatePosts';
import '../styles/App.css';

const Category = React.createClass ({

	getInitialState() {
    	return {products: []};
  	},

  	componentWillMount() {
  		const reviewsRef = firebase.database().ref('reviews/dog_beds');
  		let items = [];
  		reviewsRef.on('child_added', function(snapshot) {
  			items.push(snapshot.val());
  			this.setState({
  				products: items
  			});
  		}.bind(this));
  	},

  	render() {
    	return (
	      	<div className="">
	      		<h1>CATEGORY PAGE</h1>
	      		<CreatePosts posts={this.state.products} />
	      	</div>
    	);
  	}
});

export default Category;
