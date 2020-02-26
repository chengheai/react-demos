import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// reducer 状态处理

import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

// 引入reducer
import reducer from './reducer';

var store = createStore(reducer);
// 计数器
class App extends Component {
  render() {
    return (
      <div>
        111
        <button>点一下+1</button>
      </div>
    );
  }
}
App = connect()(App);
ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
