import React from 'react';
import '../styles/App.css';

const UserProductInfo = React.createClass ({

  	render() {
        const props = this.props;
        console.log(props);
    	return (
            <div>
    	      	<label>
                    Product Name:
                    <input type="text" name="productName" onChange={props.handleInputChange} required></input>
                </label>
                <label>
                    Product Link:
                    <input type="text" name="productLink" onChange={props.handleInputChange} required></input>
                </label>
                <label>
                    Product Price: $
                    <input type="number" name="productPrice" min="0.01" step="0.01" onChange={props.handleInputChange} required></input>
                </label>
                <label>
                    Product Description:
                    <textarea name="productDescription" onChange={props.handleInputChange} required></textarea>
                </label>
                {props.productIndex > 0 && (props.productIndex === props.numProducts - 1) ? 
                    <button onClick={props.deleteProduct}>Remove</button> : ''}
            </div>
    	);
  	}
});

export default UserProductInfo;