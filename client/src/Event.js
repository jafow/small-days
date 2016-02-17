import React from 'react'
import Details from './Details'

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
			data.forEach((e) => getEvents.push(e));
			that.setState({ events: getEvents });

		});
	},
	render() {
		let singleEvent = this.state.events[0];
		for (let details in singleEvent) {
			return <Details key={details} where={singleEvent.where} when={singleEvent.when} what={singleEvent.what} cost={singleEvent.cost} />
		}

		//console.log('single event ', singleEvent);
		return (
			<div>
				<h2>Go</h2>
				<div>
					{singleEvent}
				</div>
			</div>
		)
	}
})
