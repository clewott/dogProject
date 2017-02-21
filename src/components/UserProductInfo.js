import React from 'react';
import '../styles/App.css';

const UserProductInfo = React.createClass ({

  	render() {
        const props = this.props;
    	return (
            <fieldset name={'product_' + props.productIndex} onChange={props.handleInputChange}>
    	      	<label>
                    Product Name:
                    <input type="text" name={'productName_' + props.productIndex} required></input>
                </label>
                <label>
                    Product Link:
                    <input type="text" name={'productLink_' + props.productIndex} required></input>
                </label>
                <label>
                    Product Price: $
                    <input type="number" name={'productPrice_' + props.productIndex} min="0.01" step="0.01" required></input>
                </label>
                <label>
                    Product Description:
                    <textarea name={'productDescription_' + props.productIndex} required></textarea>
                </label>
                {props.productIndex > 0 && (props.productIndex === props.numProducts - 1) ? 
                    <button onClick={props.deleteProduct}>Remove</button> : ''}
            </fieldset>
    	);
  	}
});

export default UserProductInfo;