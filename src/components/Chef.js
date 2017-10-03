import React from 'react';
import {connect} from 'react-redux';
import {displaySelectedChef, getMenu, getHours, getReviews} from '../actions';
import Navbar from './functional/Navbar';
import Map from './ChefMap';

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
                <div
                    className="list-group-item"
                    style={{padding: '1.25rem 1.25rem 0 1.25rem', border: '0', borderRadius: '0', backgroundColor: 'transparent'}}
                >
                  <span className="mainText" style={{marginBottom: '1.25rem'}}>{item.item_name}</span>
                  <span className="see_menu_btn_container"
                        onClick={() => this.props.history.push(`/chef-id/${item.chef_id}/food-id/${item.menu_item_number}`)}
                  >
              <span className="button_title">SEE</span>
          </span>
                  <div style={{width: '100%', height: '1px', backgroundColor: '#fff'}}> </div>
                </div>
            );
        })
    }

    getDay (hour) {
        switch (hour.day) {
            case 0:
                return 'SUN';
            case 1:
                return 'MON';
            case 2:
                return 'TUE';
            case 3:
                return 'WED';
            case 4:
                return 'THU';
            case 5:
                return 'FRI';
            case 6:
                return 'SAT';
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
                  <span className="subSubTitle">{this.getDay(hour)}</span> <span className="mainText"> {this.formatTime(hour.open)} - {this.formatTime(hour.close)} pm </span>
                  <div style={{width: '100%', height: '1px', backgroundColor: '#fff', marginTop: '10px', marginBottom: '15px'}}> </div>
                </div>
            );
        })
    }

    renderReviews () {
        return this.props.reviews.map((review) => {
            return (
                <div style={{padding:'0', border: '0', backgroundColor: 'transparent', minWidth: '100%'}}>
                  <h2 className="subSubTitle">{review.user_name}</h2>
                  <h2 className="subSubTitle tooDarkGray-font"><b>(Rate: <i>{review.rating} / 5</i>)</b></h2>
                  <span className="mainText">{review.body}</span>
                  <div style={{width: '100%', height: '1px', backgroundColor: '#fff', marginTop: '10px', marginBottom: '15px'}}> </div>
                </div>
            );
        });
    }

    render () {
        return (
            <div>
              <Navbar />
              <div className="row">
                <div className="col-xs-12 col-md-12 col-lg-6">
                  <div className="card" style={styles.cardStyle}>
                    <span className="text-center subTitle margin_top_20"><img src="../../../img/section_title_chefs.png" style={{marginBottom: '10px'}} /><br />MENU</span>
                    <div className="list-group" style={{border: '0'}}>
                        {this.renderMenu()}
                    </div>

                  </div>
                </div>
                <div className="col-xs-12 col-md-12 col-lg-6">
                  <div className="card" style={styles.mapCardStyle}>
                    <Map
                        lat={this.props.chef.lat}
                        lng={this.props.chef.lng}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                  <div className="card" style={styles.cardStyle}>
                      {/*<h2 className="card-img-overlay text-center subTitle"><img src="../../../img/section_title_chefs.png" style={{marginBottom: '10px'}} /><br />CHEF</h2>*/}
                    <div style={{overflow: 'hidden'}}>
                      <img className="card-img img-responsive" src={this.props.chef.portrait} alt="picture of chef" style={styles.cardImageStyle} />
                    </div>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                  <div className="card" style={styles.cardStyle}>
                    <h2 className="text-center subTitle margin_top_20"><img src="../../../img/section_title_chefs.png" style={{marginBottom: '10px'}} /><br />CHEF INFO</h2>
                    <div className="card-block">
                      <h6 className="text-center subSubTitle">CHEF NAME</h6>
                      <h5 className="text-center nameTitle">{this.props.chef.firstName} {this.props.chef.lastName}</h5>
                      <div style={{width: '100%', height: '1px', backgroundColor: '#fff', marginTop: '10px', marginBottom: '15px'}}> </div>
                      <h6 className="text-center subSubTitle">KITCHEN NAME</h6>
                      <h5 className="text-center nameTitle">{this.props.chef.alias}</h5>
                      <div style={{width: '100%', height: '1px', backgroundColor: '#fff', marginTop: '10px', marginBottom: '15px'}}> </div>
                      <h6 className="text-center subSubTitle">FOODTYPE</h6>
                      <h5 className="text-center nameTitle">{this.props.chef.foodType}</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                  <div className="card" style={styles.cardStyle}>
                    <h2 className="text-center subTitle margin_top_20"><img src="../../../img/section_title_chefs.png" style={{marginBottom: '10px'}} /><br />HOURS</h2>
                    <div className="card-block">
                        {this.renderHours()}
                    </div>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                  <div className="card" style={styles.cardStyle}>
                    <h2 className="text-center subTitle margin_top_20"><img src="../../../img/section_title_chefs.png" style={{marginBottom: '10px'}} /><br />REVIEWS</h2>
                    <div className="card-block" style={{padding:'0'}}>
                      <div className="list-group" style={{padding:'15px', minWidth: '100%'}}>
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
        // minHeight: '250px',
        width: '100%',
        border: '15px solid #edba1f',
        backgroundColor: '#ed9421',
        borderRadius: '0'
    },
    mapCardStyle: {
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        marginTop: '15px',
        minHeight: '300px',
        width: '100%',
        border: '15px solid #edba1f',
        backgroundColor: '#ed9421',
        borderRadius: '0'
    },
    cardImageStyle: {
        borderRadius: '0',
        objectFit: 'cover',
        width: '100%',
        height: 'auto'
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