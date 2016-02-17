import React from 'react'
import Details from './Details'

export default React.createClass({
	getInitialState() {
		return {
			events: [],
			showEvent: null
		}
	},

	showDetails() {
		let showEvent = this.state.events[0];
		this.setState({showEvent: showEvent});
	},

	componentDidMount() {
		let that = this;
		let getEvents = [];
		$.get('/events').done((data) => {
			data.forEach((e) => getEvents.push(e));
			that.setState({ events: getEvents });
		});
	},

	render() {
		let detail = <Details />
		console.log('first event ob ', this.state.events[0]);
		//Render event onClick rather than on Load
		if(this.state.showEvent) {
			detail = this.state.showEvent;
			for (let info in detail) {
				return <Details key={info} where={detail.where} when={detail.when} what={detail.what} cost={detail.cost} />
			}
		}

		return (
			<div>
			<button	onClick={this.showDetails}>Find An Event</button>
				<h2>Go</h2>
				<div>
					{detail}
				</div>
			</div>
		)
	}
});
