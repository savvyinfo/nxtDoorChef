import {HOURS} from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case HOURS:
      return action.payload;
    default:
      return state;
  }
};