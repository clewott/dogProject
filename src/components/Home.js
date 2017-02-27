import React from 'react';
import CreatePostTiles from './CreatePostTiles';
import '../styles/App.css';
import firebase from 'firebase';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    addPost(post) {
        const newArray = this.state.posts.slice();
        newArray.push(post);
        this.setState({
            posts: newArray
        })
    }

    componentDidMount() {
        const postsRef = firebase.database().ref('posts');
        const here = this;
        postsRef.on('child_added', function(data) {
            here.addPost(data.val());
        });
    }

    componentWillUnmount() {
        firebase.database().ref('posts').off();
    }
  
    render() {
        return (
            <div className="App">
                <div>
                    <h2>This is going to be the search input</h2>
                    <CreatePostTiles posts={this.state.posts} />
                </div>
        
            </div>
        );
    }
};

export default Home;
