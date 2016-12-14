import React from 'react'
import computer from 'file!./img/computer.png'
import a from 'file!./img/a.png'
import s from 'file!./img/s.png'
import d from 'file!./img/d.png'
import f from 'file!./img/f.png'
import g from 'file!./img/g.png'
import h from 'file!./img/h.png'
import j from 'file!./img/j.png'
import k from 'file!./img/k.png'
import l from 'file!./img/l.png'
import semicolon from 'file!./img/semicolon.png'

class Soundboard extends React.Component {
	constructor(props) {
		super(props)

		this.getOpacity = this.getOpacity.bind(this)
	}
	getOpacity(key) {
		return {opacity: this.props[key].isActive ? 1 : 0 }
	}
	render() {
		return (
			<div className="one-content">
				<img className="computer" src={computer} />
				<img className="a" src={a} style={this.getOpacity('a')} />
				<img className="s" src={s} style={this.getOpacity('s')} />
				<img className="d" src={d} style={this.getOpacity('d')} />
				<img className="f" src={f} style={this.getOpacity('f')} />
				<img className="g" src={g} style={this.getOpacity('g')} />
				<img className="h" src={h} style={this.getOpacity('h')} />
				<img className="j" src={j} style={this.getOpacity('j')} />
				<img className="k" src={k} style={this.getOpacity('k')} />
				<img className="l"src={l} style={this.getOpacity('l')} />
				<img className="semicolon" src={semicolon} style={this.getOpacity('semicolon')} />
			</div>
		)
	}
}

export default Soundboard