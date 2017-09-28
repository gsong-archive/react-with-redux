import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  deleteTodo,
  fetchTodos,
  getVisibleTodos,
  toggleTodo,
} from '../reducers/todo';

const TodoItem = ({ id, name, isComplete, deleteItem, toggleItem }) => (
  <li>
    <span className="delete-item">
      <button onClick={() => deleteItem(id)}>X</button>
    </span>
    <input
      type="checkbox"
      checked={isComplete}
      onChange={() => toggleItem(id)}
    />
    {name}
  </li>
);

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="Todo-List">
        <ul>
          {this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              {...todo}
              deleteItem={this.props.deleteTodo}
              toggleItem={this.props.toggleTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    todos: getVisibleTodos(state.todo.todos, ownProps.filter),
  }),
  {
    deleteTodo,
    fetchTodos,
    toggleTodo,
  },
)(TodoList);
