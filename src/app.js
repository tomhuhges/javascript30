import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
	render() {
		console.log(this.props)
		return (
			<div>
				<div id="header">
					<Link to="/">Home</Link>
					<h1>Javascript30</h1>
				</div>
				<div id="project" className={this.props.routes['1'].path}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

// App.propTypes = {
// 	children: React.PropTypes.object.isRequired
// }

export default App