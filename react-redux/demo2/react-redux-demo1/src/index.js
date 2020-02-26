import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import createStore from './createStore';
import Title from './Title';
import reducer from './reducer';
var store = createStore(reducer);
class App extends Component {
  constructor() {
    super();
    // 定义app的setState正确更新app组件
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }
  changeTitle = newTitle => {
    store.dispatch({ type: 'CHANGE_TITLE', newTitle });
  };
  render() {
    const { title, content } = store.getState();
    return (
      <div>
        <Title store={store}></Title>
        <h3>{title}</h3>
        <p>{content}</p>
        <button onClick={() => this.changeTitle('新标题')}>修改标题</button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
