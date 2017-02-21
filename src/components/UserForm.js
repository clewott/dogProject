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
	    	numProducts: 1,
	    	productData: [],
	    	submitted: false
	    };

	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.addProduct = this.addProduct.bind(this);
	    this.deleteProduct = this.deleteProduct.bind(this);
	    this.addProductToData = this.addProductToData.bind(this);
	}

	handleInputChange(event) {
	    const target = event.target;
	    const value = target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
	    });
	}

	handleData(data) {
		let formData = [];
		
		for (let i = 0; i < data.numProducts; i++) {

			const productName = 'productName_' + i;
			const productLink = 'productLink_' + i;
			const productPrice = 'productPrice_' + i;
			const productDesc = 'productDescription_' + i;

			formData.push({
				title: data[productName],
				link: data[productLink],
				price: data[productPrice],
				desc: data[productDesc]
			});
		}

		return formData;
	}

	addProductToData(e) {
		e.preventDefault();
		const category = this.state.productCategory.replace(/\s+/g, '_').toLowerCase();
		const newProducts = this.handleData(this.state);

		base.post('userReviews/' + category, {
			data: newProducts,
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
    	return (
    		<div className="">
    			{this.state.submitted === false ? 
        		<form onSubmit={this.addProductToData}>
        			<label>
		        		Product Category:
		        		<input type="text" name="productCategory" onChange={this.handleInputChange} required></input>
		        	</label>
		        	{products}
		        	<button onClick={this.addProduct}>Add another product</button>
		        	<input type="submit" value="Submit"></input>
		        </form>
		    	: <h2>Thank you for submitting a product for review</h2>}
      		</div>
    	);
  	}

}

export default UserForm;