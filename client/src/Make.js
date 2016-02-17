import React from 'react'
import Craft from './Craft'

export default React.createClass({
	getInitialState() {
		return {
			craftList: [],
			firstCraft: null
		}
	},

	showCraft() {
		let firstCraft = this.state.craftList[0];
		this.setState({firstCraft: firstCraft});
	},

	componentDidMount() {
		let that = this;
		let getCrafts = [];
		$.get('/crafts').done((data) => {
			data.forEach((obj) => getCrafts.push(obj));
			that.setState({ firstCraft: getCrafts });
		});
	},

	render() {
		let craft = <Craft />
		if (this.state.firstCraft) {
			craft = this.state.firstCraft[0];
			for (let item in craft) {
				return <Craft key={item} title={craft.title} description={craft.description} link={craft.link} />
			}
		}

		return (
			<div>
			<button onClick={this.showCraft}>Show ideas</button>
				<h2>Make</h2>
				<div>
					{craft}
				</div>
			</div>
		)
	}
})
