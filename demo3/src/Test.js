import React, {Component} from 'react';
export default class Test extends Component{
  constructor(props) {
    super(props)
    console.log('constructor: ', constructor);
  }
  componentWillMount(){
    console.log('组件将要加载 componentWillMount');
  }
  componentDidMount() {
    console.log('组件已经加载 componentDidMount');
  }
  render(){
    console.log('render: ', render);
    return(
      <div style={{border: '1px solid red'}}>
        Test
      </div>
    )
  }
}