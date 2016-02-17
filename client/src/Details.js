import React from 'react'
import Event from './Event'

export default React.createClass({
	render() {
		return (
			<div>
				<ul>
					<li>What: {this.props.what}</li>
					<li>Where: {this.props.where}</li>
					<li>When: {this.props.when}</li>
					<li>How Much: {this.props.cost}</li>
				</ul>
			</div>
		)
	}
})
