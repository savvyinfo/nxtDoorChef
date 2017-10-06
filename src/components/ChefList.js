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
          <div className="col-12">
            <div className="card" style={styles.headerTransparentStyle}>
              <div style={styles.titleContainerSmallStyle}>
              </div>
              <div style={styles.titleContainerStyle}>
                <span className="mainText text-center white-font"><span className="headTitle">CHEFS NEARBY</span><br />See who's cooking around you, find your craving, and satisfy it!</span>
              </div>
              <img src="../../../img/section_title_chefs_all_shadow.png" style={styles.chefIconStyle} />
            </div>
          </div>

          {/*<div className="col-xs-12 col-md-12 col-lg-6">*/}
            {/*<div className="card map_back_01" style={styles.headerStyle}>*/}
              {/*<h3>Map placeholder</h3>*/}
              {/*<h5>(Chef icons selection will be placed here.)</h5>*/}
            {/*</div>*/}
          {/*</div>*/}

        </div>

        <div className="row">
          {this.displayChefs()}
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
        width: '60vmin'
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

const mapStateToProps = ({chefs}) => {
  return {
    chefs
  };
};

export default connect(mapStateToProps, {getChefs})(ChefList);