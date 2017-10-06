import {MENU} from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case MENU:
      return action.payload;
    default:
      return state;
  }
};