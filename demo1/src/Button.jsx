import React, { Component } from 'react';

export default class Button extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log('Button 组件更新了');
		return <button type="button">{this.props.name}</button>;
	}
}
// 函数 的组件
const Nav = function(props) {
	console.log('props: ', props);
	return (
		<div style={{ color: 'white', background: 'black' }}>
			{props.title}
			{props.children}
		</div>
	);
};
export { Nav };
