import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import todoReducer from './reducers/todo';
import messageReducer from './reducers/messsages';

const reducer = combineReducers({
  todo: todoReducer,
  message: messageReducer,
});

const nothing = () => next => action => next(action);

const logger = ({ getState }) => next => action => {
  console.group(action.type);
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', getState());
  console.groupEnd();
  return result;
};

const thunk = ({ dispatch, getState }) => next => action =>
  typeof action === 'function' ? action(dispatch, getState) : next(action);

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(nothing, thunk, logger)),
);
