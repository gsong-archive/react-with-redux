import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Message from './components/Message';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import logo from './logo.svg';

import './App.css';

export default () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React with Redux</h2>
    </div>
    <Router>
      <div className="Todo-App">
        <Message />
        <TodoForm />
        <Route
          path="/:filter?"
          render={({ match }) => <TodoList filter={match.params.filter} />}
        />
        <Footer />
      </div>
    </Router>
  </div>
);
