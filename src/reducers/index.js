import { combineReducers } from 'redux';
import Chefs from './ChefsReducer';
import Chef from './ChefReducer';
import Menu from './MenuReducer';
import FoodList from './FoodListReducer';
import Hours from './HoursReducer';
import Reviews from './ReviewsReducer';
import Search from './SearchReducer';
import SearchResults from './SearchResultsReducer';

const rootReducer = combineReducers({
  chefs: Chefs,
  chef: Chef,
  menu: Menu,
  foods: FoodList,
  hours: Hours,
  reviews: Reviews,
  search: Search,
  results: SearchResults
});

export default rootReducer;
