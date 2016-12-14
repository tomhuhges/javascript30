import React from 'react'

class Clock extends React.Component {
	constructor(props) {
		super(props)

		this.tick = this.tick.bind(this)
		this.getSecondsDeg = this.getSecondsDeg.bind(this)
		this.getMinutesDeg = this.getMinutesDeg.bind(this)
		this.getHoursDeg = this.getHoursDeg.bind(this)

		const now = new Date()
		this.state = {
			seconds: this.getSecondsDeg(),
			minutes: this.getMinutesDeg(),
			hours: this.getHoursDeg()
		}
	}
	componentDidMount() {
		setInterval(this.tick, 1000)
	}
	componentWillUnmount() {
		clearInterval(this.tick)
	}
	tick() {
		this.setState(
			{
				seconds: this.getSecondsDeg(),
				minutes: this.getMinutesDeg(),
				hours: this.getHoursDeg()
			}
		)
	}
	getSecondsDeg() {
		const seconds = new Date().getSeconds()
		const secondsDeg = ((seconds / 60) * 360) + 90
		return `rotate(${secondsDeg}deg)`
	}
	getMinutesDeg() {
		const minutes = new Date().getMinutes()
		const minutesDeg = ((minutes / 60) * 360) + 90
		return `rotate(${minutesDeg}deg)`
	}
	getHoursDeg() {
		const minutes = new Date().getMinutes()
		const hours = new Date().getHours()
		const hoursDeg = ((hours / 12) * 360) + (((minutes / 60) * 360) / 12) + 90
		return `rotate(${hoursDeg}deg)`
	}
	render() {
		return (
			<div className="clock">
				<div className="clock-face">
					<div className="hand hour-hand" style={{transform: this.state.hours}}></div>
					<div className="hand minute-hand" style={{transform: this.state.minutes}}></div>
					<div className="hand second-hand"style={{transform: this.state.seconds}}></div>
					<div className="center"></div>
				</div>
			</div>
		)
	}
}

export default Clock