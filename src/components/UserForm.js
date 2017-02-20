import React, { Component } from 'react';
import UserProductInfo from './UserProductInfo';
import '../styles/App.css';
import Rebase from 're-base';

const base = Rebase.createClass({
  apiKey: "AIzaSyBYtoV4M6Mt7FQvpSNDTboYCh_gnIcXHhc",
  authDomain: "dogsite-42aea.firebaseapp.com",
  databaseURL: "https://dogsite-42aea.firebaseio.com",
  storageBucket: "dogsite-42aea.appspot.com",
  messagingSenderId: "299867827949"
});

class UserForm extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	numProducts: 1
	    };

	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.addProduct = this.addProduct.bind(this);
	    this.deleteProduct = this.deleteProduct.bind(this);
	}

	handleInputChange(event) {
	    const target = event.target;
	    const value = target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
	    });
	}

	addProductToData() {
		base.post('test/chris', {
			data: {name: 'Chris Otten', age: 25},
			then(err) {
				if(!err) {
					alert('This was a success!');
				}
			}
		})
	}

	handleSubmit(event) {
		alert('A product was submitted: ' + this.state.value);
		event.preventDefault();
	}

	displayProductFormFields() {
		const children = []; 

        for (let i = 0; i < this.state.numProducts; i ++) {
            children.push(<UserProductInfo 
            	key={i} 
            	productIndex={i} 
            	numProducts={this.state.numProducts}
            	handleInputChange={this.handleInputChange} 
            	deleteProduct={this.deleteProduct} />);
        };

        return children;
	}

	addProduct() {
		this.setState({
            numProducts: this.state.numProducts + 1
        });
	}

	deleteProduct(event) {
		this.setState({
            numProducts: this.state.numProducts - 1
        });
	}

	render() {
		const products = this.displayProductFormFields();
		console.log(this.state);
    	return (
    		<div className="">
        		<form>
        			<label>
		        		Product Category:
		        		<input type="text" name="productCategory" onChange={this.handleInputChange} required></input>
		        	</label>
		        	{products}
		        	<button onClick={this.addProduct}>Add another product</button>
		        	<input type="submit" value="Submit"></input>
		        </form>
      		</div>
    	);
  	}

}

export default UserForm;