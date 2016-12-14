import React from 'react'

class Databox extends React.Component {
	render() {
		return (
			<div className="data-box">
				<p>{this.props.message}</p>
			</div>
		)
	}
}

export default Databox