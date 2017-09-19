import React from 'react';
import {connect} from 'react-redux';
import {displaySelectedChef, getMenu, getHours, getReviews} from '../actions';
import Navbar from './functional/Navbar';

class Chef extends React.Component {

  componentWillMount () {
    const {displaySelectedChef, getMenu, id, getHours, getReviews} = this.props;

    displaySelectedChef(id);
    getMenu(id);
    getHours(id);
    getReviews(id);
  }

  renderMenu () {
    return this.props.menu.map((item) => {
      return (
        <li
          className="list-group-item"
          onClick={() => this.props.history.push(`/chef-id/${item.chef_id}/food-id/${item.menu_item_number}`)}
        >
          {item.item_name}
        </li>
      );
    })
  }

  getDay (hour) {
    switch (hour.day) {
      case 0:
        return 'Sun';
      case 1:
        return 'Mon';
      case 2:
        return 'Tue';
      case 3:
        return 'Wed';
      case 4:
        return 'Thu';
      case 5:
        return 'Fri';
      case 6:
        return 'Sat';
    }
  }

  formatTime (hour) {
    if (hour >= 1300) {
      hour = hour - 1200;
    }
    if (hour.toString().length === 3) {
      return hour.toString().substring(0,1) + ':' + hour.toString().substring(1,3);
    } else {
      return hour.toString().substring(0,2) + ':' + hour.toString().substring(2,4);
    }
  }

  renderHours () {
    return this.props.hours.map((hour) => {
      return (
        <div>
          {this.getDay(hour)} {this.formatTime(hour.open)} - {this.formatTime(hour.close)} pm
        </div>
      );
    })
  }

  renderReviews () {
    return this.props.reviews.map((review) => {
      return (
        <div className="list-group-item menu-item">
          <h5>{review.user_name} - {review.rating} / 5 stars</h5>
          {review.body}
        </div>
      );
    });
  }

  render () {
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="card" style={styles.cardStyle}>
              <h2 className="text-center">Menu</h2>
              <ul className="list-group">
                {this.renderMenu()}
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card" style={styles.cardStyle}>
              <h2 className="text-center">Map</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card" style={styles.cardStyle}>
              <h2 className="text-center">Chef</h2>
              <img className="card-img" src={this.props.chef.portrait} alt="picture of chef" style={{height: '200px'}}/>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card" style={styles.cardStyle}>
              <h2 className="text-center">Chef Info</h2>
              <div className="card-block">
                <h6 className="text-center">Chef Name</h6>
                <h5 className="text-center">{this.props.chef.firstName} {this.props.chef.lastName}</h5>
                <h6 className="text-center">Kitchen Name</h6>
                <h5 className="text-center">{this.props.chef.alias}</h5>
                <h6 className="text-center">Food Type</h6>
                <h5 className="text-center">{this.props.chef.foodType}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card" style={styles.cardStyle}>
              <h2 className="text-center">Hours</h2>
              <div className="card-block">
                {this.renderHours()}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card" style={styles.cardStyle}>
              <h2 className="text-center">Reviews</h2>
              <div className="card-block" style={{maxHeight: '250px', overflow: 'scroll'}}>
                <div className="list-group" >
                  {this.renderReviews()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  cardStyle: {
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    marginTop: '15px',
    minHeight: '300px'
  }
};

const mapStateToProps = (state, ownProps) => {
  const {chef, menu, hours, reviews} = state;

  return {
    id: ownProps.match.params.id,
    chef,
    menu,
    hours,
    reviews
  };
};

export default connect(mapStateToProps, {displaySelectedChef, getMenu, getHours, getReviews})(Chef);