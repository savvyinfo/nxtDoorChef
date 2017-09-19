import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import Home from './components/Home';
import ChefList from './components/ChefList';
import Chef from './components/Chef';
import FoodItemList from './components/FoodItemList';
import Checkout from './components/Checkout';
import SearchResults from './components/SearchResults';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Switch>
          <Route path="/search/:term" component={SearchResults} />
          <Route path="/chef-id/:chef/food-id/:id" component={Checkout} />
          <Route path="/results/chef/:id" component={Chef} />
          <Route path="/results/foods" component={FoodItemList} />
          <Route path="/results/chefs" component={ChefList} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
