import React, {Component} from 'react';
export default class Test extends Component{
  constructor(props) {
    super(props)
    console.log('constructor: ', constructor);
    this.state = {
      time: new Date()
    }
  }
  tick(){
    this.setState({
      time: new Date()
    })
  }
  // 加载
  componentWillMount(){
    this.timeId = setInterval(() => {
      this.tick()
    }, 1000);
    console.log('组件将要加载 componentWillMount');
  }
  componentDidMount() {
    console.log('组件已经加载 componentDidMount');
  }
  // 更新生命周期
  componentWillReceiveProps(){
    console.log('组件将要接受参数 componentWillReceiveProps');
  }
  // 决定是否更新
  shouldComponentUpdate(nextProps, nextState){
    console.log('组件是否应该更新 shouldComponentUpdate');
    // 下一个将要更新的状态
    console.log('nextState: ', nextState);
    if(nextState.time.getSeconds() % 2 == 0){
      return true
    }
    return false;
  }
  componentWillUpdate(){
    console.log('组件将要更新 componentWillUpdate');
  }
  // getSnapshotBeforeUpdate(){
  //   console.log('在更新前获取截图 getSnapshotBeforeUpdate');
  // }
  componentDidUpdate(){
    console.log('组件已经更新 componentDidUpdate');
  }
  // 卸载
  componentWillUnmount(){
    clearInterval(this.timeId);
    console.log('组件将要卸载 componentWillUnmount');
  }
  render(){
    console.log('render');
    return (
		<div style={{ border: '1px solid red' }}>
			Test
      <p>{this.state.time.getSeconds()}</p>
			<button type="button" onClick={() => this.setState({})}>
				setState更新
			</button>
			<button type="button" onClick={() => this.forceUpdate()}>
				forceUpdate更新
			</button>
		</div>
	);
  }
}
// 组件更新两种方式
// setState forceUpdate  [主动更新]
// 组件会随父组件而更新