import React from 'react';
import * as firebase from 'firebase';
import CreatePostTiles from './CreatePostTiles';
import '../styles/App.css';

const Home = React.createClass ({

    getInitialState() {
        return {posts: []};
    },

    componentWillMount() {
        const reviewsRef = firebase.database().ref('posts');
        reviewsRef.on('value', function(snapshot) {
            console.log(snapshot.val());
            this.setState({
                posts: snapshot.val()
            });
        }.bind(this));
    },
  
    render() {
        console.log(this.state.posts);
        return (
            <div className="App">
                <div>
                    <h2>This is going to be the search input</h2>
                    <h2>NEW POSTS WILL GO HERE</h2>
                    <CreatePostTiles posts={this.state.posts} />
                </div>
        
            </div>
        );
    }
});

export default Home;
