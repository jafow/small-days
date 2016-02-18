import React from 'react'
import Details from './Details'
import NavLink from './NavLink'

export default React.createClass({
	getInitialState() {
		return {
			events: [],
			showEvent: null,
			currentFocus: 0
		}
	},

	showDetails() {
		let showEvent = this.state.events[this.state.currentFocus];
		this.setState({showEvent: showEvent});
	},

	forwardOne() {
		this.state.currentFocus += 1;
		this.showDetails();
	},

	backOne() {
		if (this.state.currentFocus > 1) {
			this.state.currentFocus -= 1;
			this.showDetails();
		} else {
			this.showDetails()
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
		let detail = <Details />
		//Render event onClick rather than on Load
		if(this.state.showEvent) {
			let detail = this.state.showEvent;
			for (let info in detail) {
				return <Details key={info} where={detail.where} when={detail.when} what={detail.what} cost={detail.cost} forwardOne={this.forwardOne} backOne={this.backOne} />
			}
		}

		return (
			<div>
				<div>
					<button onClick={this.backOne} className="btn btn-group btn-default">Previous</button>
					<button onClick={this.showDetails} className="btn btn-group btn-default">Show ideas</button>
					<button onClick={this.forwardOne} className="btn btn-group btn-default">Next</button>
				</div>

				<div>
					{detail}
				</div>
			</div>
		)
	}
});
