import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveTodo } from '../reducers/todo';

const initState = { currentTodo: '' };

class TodoForm extends Component {
  state = initState;

  componentWillUpdate = (nextProps, nextState) =>
    console.log('componentWillUpdate', nextState);

  componentDidUpdate = () =>
    console.log('componentDidUpdate', this.state);

  handleInputChange = evt => {
    const currentTodo = evt.target.value;
    console.group('Setting', { currentTodo });
    console.log('Before', this.state);
    this.setState({ currentTodo }, () => console.log('Callback', this.state));
    console.log('After', this.state);
    console.groupEnd();
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
