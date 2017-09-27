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
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                  <div style={styles.headerTransparentStyle}>
                      <img src="../../../img/section_title_home_big_shadow.png" style={styles.homeIconStyle}/>
                      <div style={styles.titleContainerStyle}>
                          <span className="headTitle">A Taste of Home</span>
                      </div>
                  </div>
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                  <div className="card" style={styles.chefContainerStyle}>
                      <div className="card-block" style={styles.chefHeaderStyle}>
                          <img src="../../../img/section_title_chefs.png" className="chef-icon" />

                          <Card
                              title="CHEFS NEARBY"
                              action="SEE ALL"
                              onClick={() => this.props.history.push('/results/chefs')}
                          />

                      </div>
                  </div>
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                  <div className="card" style={styles.chefContainerStyle}>
                      <div className="card-block map_back_01" style={styles.chefHeaderStyle}>
                          <h3>Map placeholder</h3>
                      </div>
                  </div>
              </div>

          </div>

        <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div style={styles.headerTransparentStyle}>

                    <div style={styles.basketContainerStyle}>
                        <div style={styles.basketTopStyle}>
                        </div>
                        <div style={styles.basketMiddleStyle}>
                        </div>
                        <div style={styles.basketBottomStyle}>
                        </div>
                    </div>

                    <div style={styles.titleContainerBigStyle}>
                        <span className="mainText white-font text-center">
                            Simply enter the type of food you'd like to eat in the search bar,
                            see who's cooking around you, find your craving, and satisfy it.
                            Take a trip to your city's largest neighborhood eatery today.
                            And the best part is... it's just right next door!
                        </span>
                    </div>

                </div>
            </div>

        {/*<div className="w-100"></div>*/}

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
            <div className="card" style={styles.cookingContainerStyle}>
              <div className="card-block" style={styles.cookingHeaderStyle}>

                  <img src="../../../img/section_title_cooking.png" className="chef-icon" />

                <Card
                    title="COOKIN' NEARBY"
                    action="SEE ALL"
                    onClick={() => this.props.history.push('/results/foods')}
                />
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
            <div className="card" style={styles.cookingContainerStyle}>
              <div className="card-block" style={styles.cookingHeaderStyle}>

                <img src="../../../img/section_title_cooking.png" className="chef-icon" />

                <form>
                  <div className="form-group">
                    {/*<h4 className="sectionTitle">SEARCH BY CUISINE</h4>*/}
                    <input
                      value={this.props.search}
                      onChange={(event) => this.props.searchInput(event.target.value)}
                      type="text"
                      className="form-control greenLight-bg inputWords"
                      style={styles.searchInputStyle}
                      placeholder="Search by Cuisine"
                    />

                  </div>
                </form>
              </div>

              <div className="card-block green-bg" style={styles.cookingBottomStyle}>
                <div
                    onClick={() => this.props.history.push(`/search/${this.props.search}`)}
                    className="see_btn_container"
                >
                  <span className="button_title">SEARCH</span>
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

    homeIconStyle: {
        top: '5vmin',
        width: '30vmin',
        position: 'absolute',
        left: '55%',
        zIndex: '100'
    },
    titleContainerStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2vmin',
        marginTop: '-12vmin',
        marginLeft: '5vmin',
        borderRadius: '50%',
        backgroundColor: '#d85856',
        width: '40vmin',
        height: '40vmin'
    },

    titleContainerBigStyle: {
        position: 'absolute',
        padding: '7vmin',
        marginTop: '-1vmin',
        marginLeft: '30vmin',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        backgroundColor: '#ff908f',
        width: '45vmin',
        height: '45vmin'
    },

    headerTransparentStyle: {
        // background: 'transparent',
        position: 'relative',
        minHeight: '50vmin',
        maxHeight: '50vmin',
        marginTop: '15px',
        border: '0',
        borderRadius: '0'
    },

    basketContainerStyle: {
        posiiton: 'absolute',
        marginLeft: '-35vmin',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    basketTopStyle: {
        position: 'absolute',
        top: '0',
        border: '2vmin solid #edba1f',
        borderBottom: '0',
        borderRadius: '4vmin 4vmin 0 0',
        width: '20vmin',
        height: '15vmin'
    },
    basketMiddleStyle: {
        position: 'absolute',
        top: '15vmin',
        backgroundColor: '#edba1f',
        borderRadius: '1vmin',
        width: '26vmin',
        height: '3vmin'
    },
    basketBottomStyle: {
        background : 'url(../img/pattern_checkout_2.png)',
        backgroundRepeat: 'repeat',
        backgroundSize: '4vmin',
        position: 'absolute',
        top: '18vmin',
        borderRadius: '0 0 2vmin 2vmin',
        padding: '15px',
        backgroundColor: '#edba1f',
        border: '0',
        width: '23vmin',
        height: '15vmin'
    },


  chefContainerStyle: {
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        marginTop: '15px',
        borderRadius: '0',
        padding: '15px',
        backgroundColor: '#edba1f',
        border: '0',
        width: '100%',
        height: '90%',
        maxHeight: '250px',
        minHeight: '250px'
  },
  cookingContainerStyle: {
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      marginTop: '15px',
      borderRadius: '0',
      padding: '15px',
      backgroundColor: '#99cccc',
      border: '0',
      width: '100%',
      height: '90%',
      maxHeight: '250px',
      minHeight: '250px'
  },

  chefHeaderStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
      height: '200px',
      border: '0',
      backgroundColor: '#ed9421'
  },
  cookingHeaderStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '200px',
      border: '0',
      backgroundColor: '#009999'
  },
    cookingBottomStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '0',
        backgroundColor: '#009999'
    },
    searchInputStyle: {
        boxShadow: 'none',
        border: '1px solid',
        float: 'left',
        outline: 'none',
        borderRadius: '0',
        color: '#ffffff',
        width:'100%',
        height: '100%',
        top: '50%',
        marginTop: '6vmin',
        padding: '10px',
        backgroundColor: 'transparent'
    }
};

const mapStateToProps = (state) => {
  return {
    search: state.search
  };
};

export default connect(mapStateToProps, {searchInput})(Home);