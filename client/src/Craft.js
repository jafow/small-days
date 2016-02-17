import React from 'react'
import Make from './Make'

export default React.createClass({
	render() {
		return (
			<div>
				<ul>
					<li>{this.props.title}</li>
					<li>{this.props.description}</li>
					<li>{this.props.linkLabel}<a href={this.props.link}>{this.props.link}</a></li>

				</ul>
			</div>
		)
	}
})
