import React from 'react'
import Clock from './Clock'
import spike from 'file-loader!./spike.jpg'
import 'css-loader!./style.css'

class Two extends React.Component {
	render() {
		return (
			<div className="content">
				<img src={spike} />
				<Clock />
			</div>
		)
	}
}

export default Two