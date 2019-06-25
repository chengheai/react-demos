import React, { Component } from 'react';
import PropsTypes from 'prop-types';
class Title extends Component {
	static contextTypes = {
		title: PropsTypes.string,
		themeColor: PropsTypes.string,
		handleChangeThemeColor: PropsTypes.func,
	};
	render() {
		console.log(this.props);
		console.log(this.context);
		return <h1 style={{ color: this.context.themeColor }}>{this.context.title}</h1>;
	}
}
class Button extends Component {
	static contextTypes = {
		title: PropsTypes.string,
		themeColor: PropsTypes.string,
		handleChangeThemeColor: PropsTypes.func,
	};
	render() {
		const { themeColor, title, handleChangeThemeColor } = this.context;
		return (
			<div>
				<Title title={title} />
				<button onClick={() => handleChangeThemeColor('red')} style={{ color: themeColor }} type="button">
					red
				</button>
				<button onClick={() => handleChangeThemeColor('green')} style={{ color: themeColor }} type="button">
					green
				</button>
			</div>
		);
	}
}
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			themeColor: 'red',
		};
	}

	static childContextTypes = {
		title: PropsTypes.string,
		themeColor: PropsTypes.string,
		handleChangeThemeColor: PropsTypes.func,
	};
	handleChangeThemeColor(color) {
		this.setState({
			themeColor: color,
		});
	}
	getChildContext() {
		return {
			title: '大标题',
			themeColor: this.state.themeColor,
			handleChangeThemeColor: color => this.handleChangeThemeColor(color),
		};
	}
	render() {
		return (
			<div>
				<Button />
			</div>
		);
	}
}

export default App;
