import {
  createTodo,
  destroyTodo,
  getTodos,
  updateTodo,
} from '../lib/todoServices';
import { hideMessage, showMessage } from './messsages';

const initState = {
  todos: [],
  currentTodo: '',
};

const CURRENT_UPDATE = 'CURRENT_UPDATE';
const TODOS_LOAD = 'TODOS_LOAD';
const TODO_ADD = 'TODO_ADD';
const TODO_REMOVE = 'TODO_REMOVE';
const TODO_REPLACE = 'TODO_REPLACE';

export const addTodo = todo => ({ type: TODO_ADD, payload: todo });
export const loadTodos = todos => ({ type: TODOS_LOAD, payload: todos });
export const removeTodo = id => ({ type: TODO_REMOVE, payload: id });
export const replaceTodo = todo => ({ type: TODO_REPLACE, payload: todo });
export const updateCurrent = val => ({ type: CURRENT_UPDATE, payload: val });

export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    case TODOS_LOAD:
      return { ...state, todos: action.payload };
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload };
    case TODO_REPLACE:
      return {
        ...state,
        todos: state.todos.map(
          t => (t.id === action.payload.id ? action.payload : t),
        ),
      };
    case TODO_REMOVE:
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload),
      };
    default:
      return state;
  }
};

const dispatchHideMessage = (dispatch, timeout = 500) => {
  setTimeout(() => {
    dispatch(hideMessage());
  }, timeout);
};

const dispatchAction = (dispatch, action) => {
  const state = dispatch(action);
  dispatchHideMessage(dispatch);
  return state;
};

export const fetchTodos = () => async dispatch => {
  dispatch(showMessage('Loading Todos'));
  const todos = await getTodos();
  dispatchAction(dispatch, loadTodos(todos));
};

export const saveTodo = name => async dispatch => {
  dispatch(showMessage(`Saving “${name}”`));
  const todo = await createTodo(name);
  dispatchAction(dispatch, addTodo(todo));
  dispatch(updateCurrent(''));
};

export const toggleTodo = id => async (dispatch, getState) => {
  dispatch(showMessage('Updating Todo'));

  const { todos } = getState().todo;
  let todo = todos.find(t => t.id === id);
  todo = { ...todo, isComplete: !todo.isComplete };

  todo = await updateTodo(todo);
  dispatchAction(dispatch, replaceTodo(todo));
};

export const deleteTodo = id => async dispatch => {
  dispatch(showMessage('Removing Todo'));
  await destroyTodo(id);
  dispatchAction(dispatch, removeTodo(id));
};

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'active':
      return todos.filter(t => !t.isComplete);
    case 'completed':
      return todos.filter(t => t.isComplete);
    default:
      return todos;
  }
};
