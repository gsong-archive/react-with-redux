import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveTodo, updateCurrent } from '../reducers/todo';

class TodoForm extends Component {
  handleInputChange = evt => {
    const val = evt.target.value;
    this.props.updateCurrent(val);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.saveTodo(this.props.currentTodo);
  };

  render() {
    const { currentTodo } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={currentTodo}
        />
      </form>
    );
  }
}

export default connect(state => ({ currentTodo: state.todo.currentTodo }), {
  saveTodo,
  updateCurrent,
})(TodoForm);
