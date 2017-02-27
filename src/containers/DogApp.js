import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
  
class App extends React.Component {

  	render() {
    	return (
      		<div>
	        	<Header />
	        	{this.props.module}
	        	<Footer />
      		</div>
    	);
  	}
}

export default App;