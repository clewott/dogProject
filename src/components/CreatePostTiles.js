import React from 'react';
import '../styles/App.css';

const CreatePostTiles = React.createClass ({

  	render() {
        let posts = this.props.posts;
        let postTiles = [];
        for (let i = 0; i < posts.length; i++) {
            postTiles.push(<li key={i}>
                <div>
                    <h2>{posts[i].title}</h2>

                    <a href={"/reviews/" + posts[i].link}>Item</a>

                    <p>{posts[i].desc}</p>
                </div>
                
            </li>);
        }
    	return (
	      	<div className="">
                <h2>Most Recent Posts</h2>
	      		<ul>
                    {postTiles}       
                </ul>
	      	</div>
    	);
  	}
});

export default CreatePostTiles;