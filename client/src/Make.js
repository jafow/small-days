import React from 'react'
import Craft from './Craft'


export default React.createClass({
	getInitialState() {
		return {
			craftList: [],
			firstCraft: null,
			currentFocus: 0
		}
	},

	showCraft() {
		let firstCraft = this.state.craftList[this.state.currentFocus];
		this.setState({firstCraft: firstCraft});
	},

	forwardOne() {
		this.state.currentFocus += 1;
		this.showCraft();
	},

	backOne() {
		if (this.state.currentFocus > 1) {
			this.state.currentFocus -= 1;
			this.showCraft();
		} else {
			this.showCraft();
		}
	},

	componentDidMount() {
		let that = this;
		let getCrafts = [];
		$.get('/crafts').done((data) => {
			data.forEach((obj) => getCrafts.push(obj));
			that.setState({ craftList: getCrafts });
		});
	},

	render() {
		let craft = <Craft />
		if (this.state.firstCraft) {
			craft = this.state.firstCraft;
			for (let item in craft) {
				return <Craft key={item} title={craft.title} description={craft.description} link={craft.link} linkLabel={`Read more here: `}/>
			}
		}

		return (
			<div>
				<div>
					<button onClick={this.backOne} className="btn btn-group btn-default">Previous</button>
					<button onClick={this.showCraft} className="btn btn-group btn-default">Show ideas</button>
					<button onClick={this.forwardOne} className="btn btn-group btn-default">Next</button>
				</div>
				<div>
					{craft}
				</div>
			</div>
		)
	}
})
