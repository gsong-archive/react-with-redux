import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import todoReducer from './reducers/todo';
import messageReducer from './reducers/messsages';

const reducer = combineReducers({
  todo: todoReducer,
  message: messageReducer,
});

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
