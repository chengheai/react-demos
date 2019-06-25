import React from 'react';
import './App.css';
// import Test from './Test';
import Demo from './Demo'
import PropTypes from 'prop-types'
class Title extends React.Component {
	static propTypes = {
		title: PropTypes.string,
	};
	static defaultProps = {
		title: '这是一个默认标题',
	};
	render() {
		return <div>{this.props.title}</div>;
	}
}
// 生命周期函数
// 装配，更新，卸载
class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      isRenderTest: true
    }
  }
  render(){
    return (
      <div>
      <Title title={0}></Title>
      {/* {this.state.isRenderTest ?  <Test /> : '不渲染组件'} */}
      {this.state.isRenderTest ?  <Demo /> : '不渲染组件'}
        <p>App</p>
        <button type="button" onClick={()=> this.setState({})}>
          App setState 更新
        </button>
        {/* <button type='button' onClick={()=>this.setState({isRenderTest: !this.state.isRenderTest})}>切换Test渲染</button> */}
        <button type='button' onClick={()=>this.setState({isRenderTest: !this.state.isRenderTest})}>切换Demo渲染</button>
      </div>
    );

  }
}

export default App;
