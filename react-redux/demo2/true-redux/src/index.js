import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

// 引入reducer
import reducer from './reducers';
import { add_one } from './action';
var store = createStore(reducer);

// 计数器
class App extends Component {
  render() {
    console.log(this.props);
    const { count, add_one } = this.props;
    return (
      <div>
        {count}
        <button onClick={add_one}>点一下加1</button>
      </div>
    );
  }
}
// ?
var mapStateToProps = function(state, ownProps) {
  return {
    // reducer 来自
    count: state.reducer.count,
  };
};
var mapDispatchToProps = function(dispatch, ownProps) {
  return {
    add_one: function() {
      dispatch(add_one());
    },
  };
};
App = connect(mapStateToProps, mapDispatchToProps)(App);
ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
