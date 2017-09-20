import React from 'react';
import {connect} from 'react-redux';
import {foodSearch, searchInput} from '../actions';
import Card from './functional/ChefCard';
import Navbar from './functional/Navbar';

class SearchResults extends React.Component {

  componentWillMount () {
    this.props.foodSearch(this.props.search);
    this.props.searchInput('');
  }

  displayResults () {
    if (this.props.results) {
      return this.props.results.map((chef) => {
        return (
          <Card
            restaurant={chef.alias}
            chef={`${chef.firstName} ${chef.lastName}`}
            onClick={() => this.props.history.push(`/results/chef/${chef.id}`)}
          />
        );
      });
    }
  }

  render () {
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="card" style={styles.headerStyle}>
              <h1>Search Results</h1>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card" style={styles.headerStyle}>
              <h1>Map</h1>
            </div>
          </div>
        </div>
        <div className="row">
          {this.displayResults()}
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

const mapStateToProps = (state, ownProps) => {
  return {
    search: ownProps.match.params.term,
    results: state.results
  };
};

export default connect(mapStateToProps, {foodSearch, searchInput})(SearchResults);