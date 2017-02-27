import { Component } from 'react';
import { firebaseAuth } from '../constants/FirebaseAuth';

export default class LoggedInContainer extends Component {

    state = {
        loggedIn: false,
        loading: true,
    }

    componentDidMount () {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    loggedIn: true,
                    loading: false,
                })
            } else {
                this.setState({
                    loading: false
                })
            }
        })
    }

    componentWillUnmount () {
        this.removeListener();
    }

    render() {
        if (this.state.loggedIn) {
            return this.props.children
        } else {
            return null
        }
    }
}