import {FOOD_LIST} from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FOOD_LIST:
      return action.payload;
    default:
      return state;
  }
};