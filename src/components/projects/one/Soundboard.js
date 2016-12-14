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
import frog from 'file!./img/frog.png'
import sanic from 'file!./img/sanic.gif'
import mtndew from 'file!./img/mtndew.png'
import deal from 'file!./img/deal.gif'
import hit from 'file!./img/hit.png'
import snoop from 'file!./img/snoop.gif'
import frogs from 'file!./img/frogs.png'
import greyComputer from 'file!./img/grey-computer.png'
import skeleton from 'file!./img/skeleton.gif'

class Soundboard extends React.Component {
	constructor(props) {
		super(props)

		this.getStyle = this.getStyle.bind(this)
	}
	getStyle(key) {
		return {opacity: this.props[key].isActive ? 1 : 0 }
	}
	render() {
		return (
			<div className="one-content">
				<img className="computer" src={computer} />
				<img className="a" src={a} style={this.getStyle('a')} />
				<img className="s" src={s} style={this.getStyle('s')} />
				<img className="d" src={d} style={this.getStyle('d')} />
				<img className="f" src={f} style={this.getStyle('f')} />
				<img className="g" src={g} style={this.getStyle('g')} />
				<img className="h" src={h} style={this.getStyle('h')} />
				<img className="j" src={j} style={this.getStyle('j')} />
				<img className="k" src={k} style={this.getStyle('k')} />
				<img className="l"src={l} style={this.getStyle('l')} />
				<img className="semicolon" src={semicolon} style={this.getStyle('semicolon')} />
				<img className="grey-computer" src={greyComputer} style={this.getStyle('l')}/>
				<img className="frog" src={frog} style={this.getStyle('a')} />
				<img className="sanic" src={sanic} style={this.getStyle('s')} />
				<img className="mtndew" src={mtndew} style={this.getStyle('d')} />
				<img className="deal" src={deal} style={this.getStyle('g')} />
				<img className="hit" src={hit} style={this.getStyle('h')} />
				<img className="snoop" src={snoop} style={this.getStyle('j')} />
				<img className="frogs" src={frogs} style={this.getStyle('k')} />
				<img className="skeleton" src={skeleton} style={this.getStyle('semicolon')} />
			</div>
		)
	}
}

export default Soundboard