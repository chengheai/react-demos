import React, {Component} from 'react';

export default class Button extends Component{
  constructor(){
    super()
  }
  render(){
    return (
      <button type='button'>这是一个来自Button的组件</button>
    )
  }
}
const Nav = function(){
  return (<div>Nav</div>)
}
export {Nav}