import React from 'react'
import ReactDOM from 'react-dom'
import update from 'immutability-helper'
import Soundboard from './Soundboard'
import Databox from './Databox'
import Audio from './Audio'

class One extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			availableKeys: {
				'a': { isActive: false },
				's': { isActive: false },
				'd': { isActive: false },
				'f': { isActive: false },
				'g': { isActive: false },
				'h': { isActive: false },
				'j': { isActive: false },
				'k': { isActive: false },
				'l': { isActive: false },
				'semicolon': { isActive: false }
			},
			databoxmessage: 'press some buttons m8'
		}

		this.playAudio = this.playAudio.bind(this)
		this.endAudio = this.endAudio.bind(this)
		this.mlg = this.mlg.bind(this)
	}
	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.keyHandler).focus()
	}
	componentDidUpdate() {
		if ( this.state.databoxmessage !== 'press some buttons m8' && Object.keys(this.state.availableKeys).every(a=>this.state.availableKeys[a].isActive === false) ) {
			this.setState({ databoxmessage: 'press some buttons m8' })
		}
	}
	playAudio() {

	}
	endAudio(e) {
		const key = e.target.dataset.id
		const newData = update(this.state, {
			availableKeys: {[key]: {isActive: {$set: false}}}
		})
		this.setState(newData)
	}
	mlg(e) {
		e.key = e.key === ';'
			? 'semicolon'
			: e.key

		if ( Object.keys(this.state.availableKeys).includes(e.key) ) {

			const newData = update(this.state, {
				availableKeys: {[e.key]: {isActive: {$set: true}}},
				databoxmessage : {$set: e.key.toUpperCase()}
			})
			this.setState(newData)
		}
	}
	render() {
		return (
			<div tabIndex="0" ref="keyHandler" onKeyDown={this.mlg} onEnded={this.endAudio}>
				<Soundboard {...this.state.availableKeys} />
				<Audio {...this.state} />
				<Databox message={this.state.databoxmessage} />
			</div>
		)
	}
}

export default One