// 状态提升 ，方法下放
import React, { Component } from 'react';
import './App.css';
class Button extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props);
		return (
			<div style={{ color: this.props.themeColor }}>
				<button style={{ color: this.props.themeColor }} onClick={() => this.props.handleClick('red')}>
					红色
				</button>
				<button style={{ color: this.props.themeColor }} onClick={() => this.props.handleClick('green')}>
					绿色
				</button>
			</div>
		);
	}
}
class Title extends Component {
  constructor(props){
    super(props)
  }
	render() {
    const themeColor = this.props.themeColor
    return <h2 style={{color: themeColor}}>标题</h2>;
	}
}
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			themeColor: 'red',
		};
	}
	handleClick(color) {
		console.log(color);
		this.setState({
			themeColor: color,
		});
	}
	render() {
		return (
			<div>
				<h3>App</h3>
				<Title themeColor={this.state.themeColor} />
				{/*  属性传递 */}
				<Button themeColor={this.state.themeColor} handleClick={color => this.handleClick(color)} />
			</div>
		);
	}
}

export default App;
