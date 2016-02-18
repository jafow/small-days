import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Event from './Event'
import Make from './Make'

export default React.createClass({

	render () {
		return (
			<div className="container">
				<ul>
					<li><NavLink to="/go" className="link">Go</NavLink></li>
					<li><NavLink to="/make" className="link">Make</NavLink></li>
				</ul>
					{this.props.children}
			</div>
		);
	}
});
