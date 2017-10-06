import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from '../reducers/index';
import Home from './Home';
import ChefList from './ChefList';
import Chef from './Chef';
import FoodItemList from './FoodItemList';
import Checkout from './Checkout';
import SearchResults from './SearchResults';

import '../style/basic.css';
import '../style/checkout_basic.css';
import '../style/chef_basic.css';
import '../style/cooking_basic.css';
import '../style/map_basic.css';
import '../style/pg1_landing_1.css';
import '../style/style.css';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const App = () => {
    return (
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
    )
};

export default App;
