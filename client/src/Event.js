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
		this.state.currentFocus += 1;
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
			that.setState({ events: getEvents, showEvent: getEvents[0] });
		});
	},

	render() {
		//let detail = <Details />
		//Render event onClick rather than on Load
		//if(this.state.showEvent) {
			let detail = this.state.showEvent;
			for (let info in detail) {
				return <Details key={info} where={detail.where} when={detail.when} what={detail.what} cost={detail.cost} forwardOne={this.forwardOne} backOne={this.backOne} />
			}


		return (
			<div>
				<div>
					{detail}
				</div>
			</div>
		)
	}
});
