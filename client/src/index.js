import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './app'
import Event from './Event'
import Make from './Make'
import Detail from './Details'
import Craft from './Craft'

render ((
	<Router history={hashHistory} >
		<Route path="/" component={App} >
			<Route path="/go" component={Event}/>
			<Route path="/make" component={Make} />
		</Route>
	</Router>
), document.getElementById('content'))
