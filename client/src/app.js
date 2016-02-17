import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import Event from './Event'
import Make from './Make'

export default React.createClass({

	render () {
		return (
			<div className="container">
				<ul>
					<li><Link to="/go" >Go</Link></li>
					<li><Link to="/make">Make</Link></li>
				</ul>
				{this.props.children}
			</div>
		);
	}
});
