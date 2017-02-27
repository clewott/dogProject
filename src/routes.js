import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import SignIn from './components/SignIn';
import About from './components/About';
import Category from './components/Category';
import Product from './components/Product';
import LoggedInContainer from './containers/LoggedInContainer';
import UserForm from './components/UserForm';
import NotFound from './components/NotFound';

const routes = (
  	<Router history={browserHistory}>
    	<Route path="/" component={App}>
	    	<IndexRoute component={Home}/>
	    	<Route path="about" component={About}/>
	    	<Route path="category" component={() => (<Category />)}>
	    		<Route path="/reviews/:productName" component={Product}/>
	    	</Route>
	    	<Route component={LoggedInContainer}>
	    		<Route path="user-submit" component={UserForm}/>
	    	</Route>
    	</Route>
    	<Route path="signin" component={SignIn}/>
    	<Route path="*" component={NotFound}/>
  	</Router>
);

export default routes;