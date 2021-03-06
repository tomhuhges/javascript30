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
			databoxmessage: 'default',
			latestEvent: ''
		}

		this.endAudio = this.endAudio.bind(this)
		this.mlg = this.mlg.bind(this)
	}
	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.eventHandler).focus()
	}
	componentDidUpdate() {
		if ( this.state.databoxmessage !== 'default' && Object.keys(this.state.availableKeys).every(a=>this.state.availableKeys[a].isActive === false) ) {
			this.setState({ databoxmessage: 'default' })
		}
	}
	endAudio(e) {
		const key = e.target.dataset.id
		const newData = update(this.state, {
			availableKeys: {[key]: {isActive: {$set: false}}},
			latestEvent : {$set: 'end'}
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
				databoxmessage : {$set: e.key.toUpperCase()},
				latestEvent : {$set: 'key'}
			})
			this.setState(newData)
		}
	}
	render() {
		return (
			<div tabIndex="0" ref="eventHandler" onKeyDown={this.mlg} onEnded={this.endAudio}>
				<Soundboard {...this.state.availableKeys} />
				<Audio {...this.state} />
				<Databox message={this.state.databoxmessage === 'default' ? 'press some buttons m8' : this.state.databoxmessage} />
			</div>
		)
	}
}

export default One