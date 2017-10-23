import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import todoReducer from './reducers/todo';
import messageReducer from './reducers/messsages';

const reducer = combineReducers({
  todo: todoReducer,
  message: messageReducer,
});

const thunk = ({ dispatch, getState }) => next => action =>
  typeof action === 'function' ? action(dispatch, getState) : next(action);

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
