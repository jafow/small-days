import React from 'react'
import Make from './Make'

export default React.createClass({
	render() {
		return (
			<div>
				<ul>
					<li>{this.props.title}</li>
					<li>{this.props.description}</li>
				</ul>
			</div>
		)
	}
})
