import React from 'react';
import '../styles/App.css';

const CreatePosts = React.createClass ({

  	render() {
        let posts = this.props.posts;
        let products = [];
        for (let i = 0; i < posts.length; i++) {
            products.push(<li key={i}>
                <div>
                    <h2>{posts[i].title} - ${posts[i].price}</h2>

                    <a href={"http://" + posts[i].link} target="_blank">Item</a>

                    <p>{posts[i].desc}</p>
                </div>
                
            </li>);
        }
    	return (
	      	<div className="">
	      		<ul>
                    {products}       
                </ul>
	      	</div>
    	);
  	}
});

export default CreatePosts;