import React from 'react'
import ReactDOM from 'react-dom'
import Event from './Event'
import Make from './Make'
//
// const React = require('react');
// const ReactDOM = require('react-dom');
// const Event = require('./event.js');
// const Make = require('./Make.js');

const App = React.createClass({

	render () {
		return (
			<div className='container'>
				<div className='event'>
					<Event />
				</div>
				<div className='make'>
					<Make />
				</div>
			</div>
		);
	}
});


ReactDOM.render(<App />, document.getElementById('content'));
