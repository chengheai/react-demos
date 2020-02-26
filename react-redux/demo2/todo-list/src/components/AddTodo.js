import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add_todo } from '../action';
import { v4 as uuidv4 } from 'uuid';
// console.log(uuid);
class AddTodo extends Component {
  render() {
    const { addTodo } = this.props;
    // console.log(addTodo);
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (this.input.value) {
              addTodo(uuidv4(), this.input.value);
              this.input.value = '';
            }
          }}
        >
          <input
            ref={node => {
              this.input = node;
            }}
            type="text"
          />
          <button type="submit">添加</button>
        </form>
      </div>
    );
  }
}
var mapStateToProps = function() {
  return {};
};
var mapDispatchToProps = function(dispatch) {
  return {
    addTodo: function(id, newTodo) {
      dispatch(add_todo(id, newTodo));
    },
  };
};
AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo);
export default AddTodo;
