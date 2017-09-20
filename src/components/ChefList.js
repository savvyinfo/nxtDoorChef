import React from 'react';
import {connect} from 'react-redux';
import {getChefs} from '../actions';
import Card from './functional/ChefCard';
import Navbar from './functional/Navbar';

class ChefList extends React.Component {

  componentWillMount () {
    this.props.getChefs();
  }

  displayChefs () {
    return this.props.chefs.map((chef) => {
      return (
        <Card
          restaurant={chef.alias}
          chef={`${chef.firstName} ${chef.lastName}`}
          onClick={() => this.props.history.push(`/results/chef/${chef.id}`)}
        />
      );
    });
  }

  render () {
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="card" style={styles.headerStyle}>
              <h1>Chefs Nearby</h1>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card" style={styles.headerStyle}>
              <h1>Map</h1>
            </div>
          </div>
        </div>
        <div className="row">
          {this.displayChefs()}
        </div>
      </div>
    );
  }
}

const styles = {
  headerStyle: {
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    height: '250px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15px',
    borderRadius: '0'
  }
};

const mapStateToProps = ({chefs}) => {
  return {
    chefs
  };
};

export default connect(mapStateToProps, {getChefs})(ChefList);