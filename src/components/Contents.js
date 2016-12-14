import React from 'react'
import { Link } from 'react-router'

class Contents extends React.Component {
	render() {
		return (
			<div>
				<div id="header">
					<Link to="/"><h1>tom huhges ~ Javascript30</h1></Link>
				</div>
				<h1>Contents</h1>
				<ul>
				<li><Link to="one">project #1 - MLG soundboard</Link></li>
				<li><Link to="two">project #2 - spike lee clock</Link></li>
				</ul>
			</div>
		)
	}
}

export default Contents