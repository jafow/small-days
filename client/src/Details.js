import React from 'react'
import Event from './Event'

export default React.createClass({
	render() {
		return (
			<div>
				<ul>
					<span className="label">What:<li className="details">{this.props.what}</li></span>
					<span className="label">Where: </span><li className="details">{this.props.where}</li>
					<span className="label">When: </span><li className="details">{this.props.when}</li>
					<span className="label">Why: </span><li className="details">{this.props.cost}</li>
				</ul>
			</div>
		)
	}
})
