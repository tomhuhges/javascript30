import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, browserHistory } from 'react-router'
import App from './app'
import Contents from './components/Contents'
import One from './components/projects/one/index.js'

let googlefonts = document.createElement('link')
googlefonts.href = 'https://fonts.googleapis.com/css?family=Source+Code+Pro:200,400'
googlefonts.setAttribute('rel', 'stylesheet')
document.head.appendChild(googlefonts)

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Contents} />
			<Route path="one" component={One} />
		</Route>
	</Router>,
	document.getElementById('app')
)