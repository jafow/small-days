import React from 'react'
import Details from './Details'

export default React.createClass({
	getInitialState() {
		return {
			events: [],
			showEvent: null,
			currentFocus: 0
		}
	},

	showDetails() {
		//this.state.currentFocus += 1;
		let showEvent = this.state.events[this.state.currentFocus];
		this.setState({showEvent: showEvent});
	},

	forwardOne() {
		this.state.currentFocus += 1;
		this.showDetails();
	},

	backOne() {
		this.state.currentFocus -= 1;
		this.showDetails();
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
			<button onClick={this.forwardOne}>Next Event</button>
			<button onClick={this.backOne}>Previous Event</button>
				<h2>Go</h2>
				<div>
					{detail}
				</div>
			</div>
		)
	}
});
