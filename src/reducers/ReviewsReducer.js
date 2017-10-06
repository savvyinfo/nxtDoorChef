import {REVIEWS} from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case REVIEWS:
      return action.payload;
    default:
      return state;
  }
};