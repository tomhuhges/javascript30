import React from 'react'
import ReactDOM from 'react-dom'
import TWOSAD4ME from 'file!./audio/2SAD4ME.mp3'
import AIRHORN from 'file!./audio/AIRHORN.mp3'

class AudioFiles extends React.Component {
	constructor(props) {
		super(props)

		this.playAudio = this.playAudio.bind(this)
		this.endAudio = this.endAudio.bind(this)
	}
	componentDidUpdate() {
		this.playAudio()
	}
	playAudio() {
		if ( this.props.availableKeys.a.isActive ) {
			ReactDOM.findDOMNode(this.refs.a).currentTime = 0
			ReactDOM.findDOMNode(this.refs.a).play()
		} else {
			ReactDOM.findDOMNode(this.refs.a).pause()
			ReactDOM.findDOMNode(this.refs.a).currentTime = 0
		}
	}
	endAudio() {
		this.props.availableKeys.a.isActive = false
		this.setState(Object.assign({},this.props))
	}
	render() {
		return (
			<div className="audio">
				<audio data-id="a" ref="a"><source src={TWOSAD4ME} type="audio/mpeg" /></audio>
				<audio ref="s"><source src={AIRHORN} type="audio/mpeg" /></audio>
			</div>
		)
	}
}

export default AudioFiles