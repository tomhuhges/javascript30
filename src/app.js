import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
	render() {
		let page = this.props.children
		let pageName = page.props.route.path ? page.props.route.path : 'contents'
		return (
			<div>
				<Link to="/" className="back">&lt;</Link>
				<div id="project" className={pageName}>
					{page}
				</div>
			</div>
		)
	}
}

// App.propTypes = {
// 	children: React.PropTypes.object.isRequired
// }

export default App