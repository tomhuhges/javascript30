import React from 'react'
import ReactDOM from 'react-dom'
import Tracks from './Tracks'

class AudioFiles extends React.Component {
	constructor(props) {
		super(props)

		this.triggerAudio = this.triggerAudio.bind(this)
	}
	componentDidUpdate() {
		this.triggerAudio()
	}
	triggerAudio() {
		const key = this.props.databoxmessage.toLowerCase()
		if ( key !== 'default' ) {
			if ( this.props.availableKeys[key].isActive ) {
				ReactDOM.findDOMNode(this.refs[key]).currentTime = 0
				ReactDOM.findDOMNode(this.refs[key]).play()
			} else {
				ReactDOM.findDOMNode(this.refs[key]).pause()
				ReactDOM.findDOMNode(this.refs[key]).currentTime = 0
			}
		}
	}
	render() {
		const tracks = Tracks.map(track=>{
			const key = Object.keys(track)[0]
			const name = track[key]
			return (
				<audio data-id={key} ref={key} key={key}><source src={name} type="audio/mpeg" /></audio>
			)
		})
		return (
			<div className="audio">
				{tracks}
			</div>
		)
	}
}

export default AudioFiles