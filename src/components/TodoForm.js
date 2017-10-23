import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveTodo } from '../reducers/todo';

const initState = { currentTodo: '' };

class TodoForm extends Component {
  state = initState;

  handleInputChange = evt => {
    const currentTodo = evt.target.value;
    this.setState({ currentTodo });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.saveTodo(this.state.currentTodo);
    this.setState(initState);
  };

  render = () => (
    <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        onChange={this.handleInputChange}
        value={this.state.currentTodo}
      />
    </form>
  );
}

export default connect(null, { saveTodo })(TodoForm);
