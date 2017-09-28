const MESSAGE_HIDE = 'MESSAGE_HIDE';
const MESSAGE_SHOW = 'MESSAGE_SHOW';

export const hideMessage = () => ({ type: MESSAGE_HIDE });
export const showMessage = msg => ({ type: MESSAGE_SHOW, payload: msg });

export default (state = '', action) => {
  switch (action.type) {
    case MESSAGE_SHOW:
      return action.payload;
    case MESSAGE_HIDE:
      return '';
    default:
      return state;
  }
};
