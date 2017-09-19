import React from 'react';
import {connect} from 'react-redux';
import Card from './functional/DishCard';
import {getFoodItems} from '../actions';
import Navbar from './functional/Navbar';

class FoodItemList extends React.Component {

  componentWillMount () {
    this.props.getFoodItems();
  }

  renderFoods () {
    return this.props.foods.map((food) => {
      return (
        <Card
          photo={food.photo}
          name={food.item_name}
          onClick={() => this.props.history.push(`/chef-id/${food.chef_id}/food-id/${food.menu_item_number}`)}
        />
      );
    });
  }

  render () {
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <div className="card" style={styles.headerStyle}>
              <h1>Cooking Nearby</h1>
            </div>
          </div>
        </div>
        <div className="row">
          {this.renderFoods()}
        </div>
      </div>
    );
  }
}

const styles = {
  headerStyle: {
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15px'
  }
};

const mapStateToProps = ({foods}) => {
  return {foods};
};

export default connect(mapStateToProps, {getFoodItems})(FoodItemList);