import React, { Component } from 'react';
import '../styles/App.css';
import firebase from 'firebase';
import CreatePosts from './CreatePosts';

class Product extends Component {

	constructor(props) {
        super(props);
        this.state = {
            products: [],
            loading: false
        }
    }

    addProduct(product) {
        const newArray = this.state.products.slice();
        newArray.push(product);
        this.setState({
            products: newArray
        })
    }

    componentDidMount() {
        const productsRef = firebase.database().ref('reviews/' + this.props.params.productName);
        const here = this;
        productsRef.on('child_added', function(data) {
            here.addProduct(data.val());
        });
    }

    componentWillUnmount() {
        firebase.database().ref('reviews/' + this.props.params.productName).off();
    }

  	render() {
  		const origTitle = this.props.params.productName;
  		const postTitle = origTitle.replace(/_/g, ' ');
    	return (
	      	<div className="">
	      		<h1>The Top {postTitle}</h1>
	      		{this.state.loading === true ? <h3> LOADING... </h3> : <CreatePosts posts={this.state.products} />}

	      	</div>
    	);
  	}
}

export default Product;