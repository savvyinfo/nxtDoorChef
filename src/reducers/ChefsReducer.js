import {CHEFS} from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case CHEFS:
      return action.payload;
    default:
      return state;
  }
};