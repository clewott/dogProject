import React, { Component } from 'react';
import '../styles/App.css';
import Rebase from 're-base';
import CreatePosts from './CreatePosts';

const base = Rebase.createClass({
  apiKey: "AIzaSyBYtoV4M6Mt7FQvpSNDTboYCh_gnIcXHhc",
  authDomain: "dogsite-42aea.firebaseapp.com",
  databaseURL: "https://dogsite-42aea.firebaseio.com",
  storageBucket: "dogsite-42aea.appspot.com",
  messagingSenderId: "299867827949"
});

class Product extends Component {

	constructor(props) {
        super(props);
        this.state = {
            products: [],
            loading: true
        }
    }

    componentDidMount() {
        this.ref = base.syncState('reviews/' + this.props.params.productName, {
            context: this,
            state: 'products',
            asArray: true,
            then(){
                this.setState({loading: false})
            }
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
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