import React from 'react'


export default React.createClass({
	getInitialState() {
		return {
			events: []
		}
	},

	componentDidMount() {
		let that = this;
		let getEvents = [];
		$.get('/events').done((data) => {
				getEvents = data.map((e) => e);
		});
		that.setState({ events: getEvents });
	},
	render() {
		return (
			<div>
				<h2>Go</h2>
				<div>
				{this.state.events}
				</div>
			</div>
		)
	}
})
