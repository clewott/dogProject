import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Category from './components/Category';
import Product from './components/Product';
import UserForm from './components/UserForm';
import NotFound from './components/NotFound';

const routes = (
  	<Router history={browserHistory}>
    	<Route path="/" component={App}>
	    	<IndexRoute component={Home}/>
	    	<Route path="about" component={About}/>
	    	<Route path="category" component={() => (<Category />)}/>
	    		<Route path="/reviews/:productName" component={Product}/>
	    	<Route path="user-submit" component={UserForm}/>
    	</Route>
    	<Route path="*" component={NotFound}/>
  	</Router>
);

export default routes;