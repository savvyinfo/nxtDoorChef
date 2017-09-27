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
          <div className="col-12">
            <div className="card" style={styles.headerTransparentStyle}>
              <div style={styles.titleContainerSmallStyle}>
              </div>
              <div style={styles.titleContainerStyle}>
                <span className="subTitle text-center"><span className="headTitle">CHEFS NEARBY</span><br />See who's cooking around you, find your craving, and satisfy it!</span>
              </div>
              <img src="../../../img/section_title_chefs_all_shadow.png" style={styles.chefIconStyle} />
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
    chefIconStyle: {
        position: 'absolute',
        bottom: '0',
        right: '0',
        width: '70vmin'
    },
    titleContainerStyle: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2vmin',
        top: '-12vmin',
        left: '5vmin',
        borderRadius: '50%',
        backgroundColor: '#ed9421',
        width: '40vmin',
        height: '40vmin'
    },
    titleContainerSmallStyle: {
        position: 'absolute',
        top: '-10vmin',
        left: '35vmin',
        borderRadius: '50%',
        backgroundColor: '#edba1f',
        width: '30vmin',
        height: '30vmin'
    },
    headerTransparentStyle: {
        boxShadow: '0 10px 20px rgba(0,0,0,0), 0 6px 6px rgba(0,0,0,0)',
        background: 'transparent',
        minHeight: '200px',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: '15px',
        border: '0',
        borderRadius: '0'
    },

  headerStyle: {
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    height: '250px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15px',
    border: '15px solid #edba1f',
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