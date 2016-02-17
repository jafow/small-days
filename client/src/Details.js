import React from 'react'
import Event from './Event'

export default React.createClass({
	render() {
		return (
			<div>
				<ul>
					<li>{this.props.what}</li>
					<li>{this.props.where}</li>
					<li>{this.props.when}</li>
					<li>{this.props.cost}</li>
				</ul>
			</div>
		)
	}
})
