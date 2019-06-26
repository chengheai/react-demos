import React, { Component } from 'react';

export default class Input extends Component{
  constructor(){
    super()
    this.state = {
      value: ''
    }
  }
  handleInput(e){
    console.log(e.target.value)
    console.log(e.target.value.length);
    if(e.target.value.length > 10) {
      alert(1)
    }
    this.setState({
      value: e.target.value
    })
  }
  render(){
    return (
      <input type="text" onInput={(e)=>this.handleInput(e)} />
    )
  }
}