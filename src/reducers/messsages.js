import { TODOS_LOAD, TODO_ADD, TODO_REMOVE, TODO_REPLACE } from './todo';

const MESSAGE_SHOW = 'MESSAGE_SHOW';

export const showMessage = msg => ({ type: MESSAGE_SHOW, payload: msg });

export default (state = '', action) => {
  switch (action.type) {
    case MESSAGE_SHOW:
      return action.payload;
    case TODOS_LOAD:
    case TODO_ADD:
    case TODO_REMOVE:
    case TODO_REPLACE:
      return '';
    default:
      return state;
  }
};
