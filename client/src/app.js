import React from 'react'
import ReactDOM from 'react-dom'
import Event from './Event'
import Make from './Make'

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
