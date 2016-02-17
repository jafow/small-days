import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import Event from './Event'
import Make from './Make'

const App = React.createClass({

	render () {
		return (
			<div className="container">
				<ul>
					<li><span className='event'><Link to="/go" >Go</Link></span></li>
					<li><span className='make'><Link to="/make">Make</Link></span></li>
				</ul>
				{this.props.children}
			</div>
		);
	}
});


ReactDOM.render(<App />, document.getElementById('content'));
