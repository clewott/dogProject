import React from 'react';
import CreatePostTiles from './CreatePostTiles';
import '../styles/App.css';
import Rebase from 're-base';

const base = Rebase.createClass({
  apiKey: "AIzaSyBYtoV4M6Mt7FQvpSNDTboYCh_gnIcXHhc",
  authDomain: "dogsite-42aea.firebaseapp.com",
  databaseURL: "https://dogsite-42aea.firebaseio.com",
  storageBucket: "dogsite-42aea.appspot.com",
  messagingSenderId: "299867827949"
});

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true
        }
    }

    componentDidMount() {
        this.ref = base.syncState('posts', {
            context: this,
            state: 'posts',
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
        return (
            <div className="App">
                <div>
                    <h2>This is going to be the search input</h2>
                    {this.state.loading === true ? <h3> LOADING... </h3> : <CreatePostTiles posts={this.state.posts} />}
                </div>
        
            </div>
        );
    }
};

export default Home;
