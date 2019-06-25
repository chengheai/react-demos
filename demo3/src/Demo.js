import React, {Component} from 'react';
export default class Demo extends Component{
  constructor(props){
    super(props)
    this.state = {
      isRender: true,
      time: new Date()
    }
    // 没有了 willmount ，所有之前在willmount的事情都要在constructor里面执行
    this.timeId = setInterval(() => {
      this.tick()
    }, 1000);
  }
  tick(){
    this.setState({
      time: new Date()
    })
  }
  static getDerivedStateFromProps(nextProps, prevState){
    // 韩素返回结果，将会添加到state里面去
    // null state不需要任何的改变
    console.log('静态生命周期函数');
    return {
      like: true
    }
  }
  getSnapshotBeforeUpdate(){
    console.log('更新前获取快照');
    return 'from update';
  }
  render(){
    console.log('render', this.state)
    return (
		<div>
			<p>Demo</p>
      {this.state.time.getSeconds()}
			<button type="button" onClick={() => this.setState({})}>
				setState
			</button>
		</div>
	);
  }
  componentDidMount(){
    console.log('componentDidMount');
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true
  }
  componentDidUpdate(prevProps, prevState, info){
    console.log('info: ', info);
    console.log('prevState: ', prevState);
    console.log('prevProps: ', prevProps);
    console.log('componentDidUpdate');
  }
  componentWillUnmount(){
    clearInterval(this.timeId)
    console.log('componentWillUnmount');
  }
}