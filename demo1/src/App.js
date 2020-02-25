import React, { Component } from 'react';
import Button, {Nav} from './Button';
import Input from './Input';
// 类方式
// class Nav extends Component{
//   constructor(){
//     super()
//   }
//   render(){
//     return (
//       <div style={{color: 'white', background: 'black'}}>header</div>
//     )
//   }
// }
// 函数方式
// const Button = function() {
//   return (
//     <button type='button'>来自Button组件</button>
//   )
// }
class App extends Component {
  constructor(){
    super()
    this.state = {
      like: false
    }
  }
  handleClick(){
    this.setState({
      like: !this.state.like
    })
  }
  render(){
    console.log('render函数触发了！！')
    const {like} = this.state;
    return (
      <div>
        <Nav />
        <Button></Button>
        <Input></Input>
        <button type='button' style={like ? {color: 'red'}: {color: 'black'}}
          onClick={() =>this.handleClick()}
        >
          {like ? '已赞' : '喜欢'}
        </button>
        <hr/>
        <Nav title={'标题'}>
          <h1>这是props.children</h1>
          <h3>这是一个props传递的1</h3>
          <Button name='test1111'></Button>
          <Button name='121212121212'></Button>
        </Nav>
      </div>
    );
  }
}

export default App;
