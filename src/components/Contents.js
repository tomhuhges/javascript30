import React from 'react'
import { Link } from 'react-router'

class Contents extends React.Component {
	render() {
		return (
			<div id="contents">
				<h1>Contents</h1>
				<Link to="one">project #1</Link>
			</div>
		)
	}
}

export default Contents