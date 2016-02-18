import React from 'react'
import Make from './Make'

export default React.createClass({
	render() {
		return (
			<div>
				<ul>
					<li className="details">{this.props.title}</li>
					<li className="details-sm">{this.props.description}</li>
					<li className="details-sm">{this.props.linkLabel}<a href={this.props.link}>{this.props.link}</a></li>

				</ul>
			</div>
		)
	}
})
