import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Message from './components/Message';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';

export default () => (
  <div className="App">
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
