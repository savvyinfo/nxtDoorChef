import React from 'react';
import {connect} from 'react-redux';
import {displaySelectedChef, getMenu} from '../actions';
import Navbar from './functional/Navbar';

class Checkout extends React.Component {
  state = {ordered: false};

  componentWillMount () {
    const {displaySelectedChef, getMenu, chefId} = this.props;

    displaySelectedChef(chefId);
    getMenu(chefId);
  }

  getItem () {
    return this.props.menu.find((item) => {
      return parseInt(this.props.menuId) === item.menu_item_number;
    });
  }

  itemOrdered () {
    if (this.state.ordered) {
      return (
        <div className="col-12 col-sm-6 offset-sm-3">
          <div className="card" style={styles.containerStyle}>
            <h4 className="text-center">Customer Info</h4>
            <div className="card-block">
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" placeholder="Enter Email"/>
                </div>
                <button type="submit" className="btn btn-outline-warning">Submit</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }

  render () {
    const food = this.getItem();

    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card" style={styles.containerStyle}>
              <h4>{food ? food.item_name : ''}</h4>
              <img className="card-img" src={food ? food.photo : ''} alt="picture of selected dish" style={styles.cardImage}/>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card" style={styles.containerStyle}>
              <h4 className="text-center">Description</h4>
              <h6>{food ? food.description : ''}</h6>
              <div className="card-block">
                <button onClick={() => this.setState({ordered: !this.state.ordered})} className="btn btn-outline-warning">Purchase</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card" style={styles.containerStyle}>
              <h4 className="text-center">Pickup Info</h4>
              <h6 className="text-center">Cost:</h6>
              <h5 className="text-center">${food ? food.price : ''}</h5>
              <h6 className="text-center">Chef Name:</h6>
              <h5 className="text-center">{this.props.chef.firstName} {this.props.chef.lastName}</h5>
              <h6 className="text-center">Chef Address:</h6>
              <h5 className="text-center">{this.props.chef.address}</h5>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card" style={styles.containerStyle}>
              <h4 className="text-center">Map</h4>
            </div>
          </div>
        </div>
        <div className="row">
          {this.itemOrdered()}
        </div>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    marginTop: '15px',
    minHeight: '250px',
    borderRadius: '0'
  },
  cardImage: {
    height: '200px'
  }
};

const mapStateToProps = (state, ownProps) => {
  const {chef, id} = ownProps.match.params;

  return {
    chefId: chef,
    menuId: id,
    chef: state.chef,
    menu: state.menu
  };
};

export default connect(mapStateToProps, {displaySelectedChef, getMenu})(Checkout);