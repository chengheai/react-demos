import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterLink from './components/FilterLink';
class App extends Component {
  render() {
    return (
      <div>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
        <FilterLink></FilterLink>
      </div>
    );
  }
}
App = connect()(App);
export default App;
