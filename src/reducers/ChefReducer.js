import {CHEF} from '../actions';

export default (state = '', action) => {
  switch (action.type) {
    case CHEF:
      return action.payload;
    default:
      return state;
  }
};