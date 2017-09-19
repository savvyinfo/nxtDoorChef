import React from 'react';
import {connect} from 'react-redux';
import Card from './functional/HomeCard';
import {searchInput} from '../actions';
import Navbar from './functional/Navbar';

class Home extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card" style={styles.containerStyle}>
              <div className="card-block" style={styles.headerStyle}>
                <form>
                  <div className="form-group">
                    <h4>Search</h4>
                    <input
                      value={this.props.search}
                      onChange={(event) => this.props.searchInput(event.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Enter Search"
                    />
                  </div>
                </form>
              </div>
              <div className="card-block">
                <button
                  onClick={() => this.props.history.push(`/search/${this.props.search}`)}
                  className="btn btn-outline-warning"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <Card
            title="Chefs Nearby"
            action="See All"
            onClick={() => this.props.history.push('/results/chefs')}
          />
          <Card
            title="Cookin' Nearby"
            action="See All"
            onClick={() => this.props.history.push('/results/foods')}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    marginTop: '15px'
  },
  headerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '150px'
  }
};

const mapStateToProps = (state) => {
  return {
    search: state.search
  };
};

export default connect(mapStateToProps, {searchInput})(Home);