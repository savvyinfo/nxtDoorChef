import React from 'react';
import {connect} from 'react-redux';
import {displaySelectedChef, getMenu, nameInput, emailInput, submit} from '../actions';
import Navbar from './functional/Navbar';
import titleCheckout from '../assets/imgs/section_title_checkout.png';
import titleCooking from '../assets/imgs/section_title_cooking.png';

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

  itemOrdered (food) {
      // if (this.props.checkout.submitted === 'success') {
      //   return;
      // }
    if (this.state.ordered) {
      return (
          <div className="col-xs-12 col-md-12 col-lg-6">
          <div className="card" style={styles.buyContainerStyle}>
            <h4 className="text-center subTitle"><img src={titleCheckout} style={{marginBottom: '10px'}} /><br />CUSTOMER INFO</h4>
            <form>
              <div className="form-group">
                <input
                    type="text"
                    className="form-control burgundyLight-bg inputwords"
                    style={styles.searchInputStyle}
                    placeholder="Enter Name"
                    onChange={(event) => this.props.nameInput(event.target.value)}
                    value={this.props.checkout.name}
                />
                <input
                    type="text"
                    className="form-control burgundyLight-bg inputwords"
                    style={styles.searchInputStyle}
                    placeholder="Enter Email"
                    onChange={(event) => this.props.emailInput(event.target.value)}
                    value={this.props.checkout.email}
                />
              </div>
              <div
                  className="submit_btn_container"
                  style={styles.submitContainerStyle}
                  onClick={() => this.props.submit(this.props.checkout.email, this.props.checkout.name, food.photo, food.price, food.item_name, 'John', this.props.chef.address)}
              >
                <span className="button_title">SUBMIT</span>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }

    goHome () {
        this.props.history.push("/");
        location.reload();
    }

    submitted () {
        if (this.props.checkout.submitted === ''){
            return;
        } else if (this.props.checkout.submitted === 'success') {
            return (
                <div className="col-xs-12 col-md-12 col-lg-6">
                    <div className="card" style={styles.buyContainerStyle}>
                        <h4 className="text-center subTitle"><img src={titleCheckout} style={{marginBottom: '10px'}} /><br />ORDER CONFIRMATION</h4>
                        <h4 className="nameTitle text-center">Thank You!</h4>
                        <p className="mainText text-center">
                            You have successfully placed your order.<br />
                            Your nxtDoorChef thanks you for your purchase!<br />
                            A confirmation has been sent to your email address.
                        </p>
                        <div className="submit_btn_container" style={styles.submitContainerStyle} onClick={() => this.goHome()}>
                            <span className="button_title">CLOSE</span>
                        </div>
                    </div>
                </div>
            );
        } else if (this.props.checkout.submitted === 'error'){
            return (
                <div className="col-xs-12 col-md-12 col-lg-6">
                    <div className="card" style={styles.buyContainerStyle}>
                        <h4 className="text-center subTitle"><img src={titleCheckout} style={{marginBottom: '10px'}} /><br />ORDER ERROR</h4>
                        <h4 className="nameTitle text-center">Oops!</h4>
                        <p className="mainText text-center">
                            Something went wrong. <br />
                            Your order did not go through.
                        </p>
                        <div className="submit_btn_container" style={styles.submitContainerStyle} onClick={() => this.goHome()}>
                            <span className="button_title">CLOSE</span>
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
            <div className="col-xs-12 col-md-12 col-lg-6">
                <div className="card" style={styles.imageContainerStyle}>

                    <div style={{overflow: 'hidden'}}>
                        <img className="card-img" src={food ? food.photo : ''} alt="picture of selected dish" style={styles.cardImageStyle}/>
                    </div>
                    <div className="card-img-overlay">
                        <div className="price_btn_container"
                             style={{position: 'absolute', left: '35%'}}
                        >
                            <h6 className="text-center subSubTitle" style={{display: 'block', marginTop: '1.25vmin', marginBottom: '.1vmin'}}>COST:</h6>
                            <span className="priceNum" style={{display: 'block'}}>${food ? food.price : ''}</span>
                        </div>
                        <div onClick={() => this.setState({ordered: !this.state.ordered})}
                             className="buy_btn_container burgundy-bg"
                             style={{position: 'absolute', left: '55%'}}
                        >
                            <span className="buy_button_title">{this.state.ordered ? 'CANCEL' : 'BUY'}</span>
                        </div>
                    </div>
                </div>
            </div>


          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
            <div className="card" style={styles.containerStyle}>
              <h4 className="text-center subTitle"><img src={titleCooking} style={{marginBottom: '10px'}} /><br />DESCRIPTION</h4>
              <h6 className="text-center subSubTitle">COOKIN' TITLE:</h6>
              <h6 className="text-center nameTitle">{food ? food.item_name : ''}</h6>
              <div style={{width: '100%', height: '1px', backgroundColor: '#fff', marginTop: '10px', marginBottom: '15px'}}> </div>
              <h6 className="text-center subSubTitle">COOKIN' DESCRIPTION:</h6>
              <h6 className="mainText text-center">{food ? food.description : ''}</h6>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
            <div className="card" style={styles.containerStyle}>
              <h4 className="text-center subTitle"><img src={titleCooking} style={{marginBottom: '10px'}} /><br />PICKUP INFO</h4>
              <h6 className="text-center subSubTitle">COST:</h6>
              <h5 className="text-center mainText">${food ? food.price : ''}</h5>
              <div style={{width: '100%', height: '1px', backgroundColor: '#fff', marginTop: '10px', marginBottom: '15px'}}> </div>
              <h6 className="text-center subSubTitle">CHEF NAME:</h6>
              <h5 className="text-center mainText">{this.props.chef.firstName} {this.props.chef.lastName}</h5>
              <div style={{width: '100%', height: '1px', backgroundColor: '#fff', marginTop: '10px', marginBottom: '15px'}}> </div>
              <h6 className="text-center subSubTitle">CHEF ADDRESS:</h6>
              <h5 className="text-center mainText">{this.props.chef.address}</h5>
            </div>
          </div>

        </div>

        <div className="row">
            {this.itemOrdered(food)}
            {this.submitted()}
        </div>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      padding: '15px',
      marginTop: '15px',
      minHeight: '250px',
      borderRadius: '0',
      width: '100%',
      border: '15px solid #99cccc',
      backgroundColor: '#009999'
  },
  imageContainerStyle: {
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      padding: '0',
      marginTop: '15px',
      borderRadius: '0',
      border: '15px solid #99cccc',
      backgroundColor: '#009999',
  },
  buyContainerStyle: {
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      padding: '15px',
      marginTop: '15px',
      borderRadius: '0',
      width: '100%',
      minHeight: '350px',
      border: '15px solid #ff908f',
      backgroundColor: '#d85856'
  },
  cardImageStyle: {
      borderRadius: '0',
      objectFit: 'cover',
      width: '100%',
      height: 'auto'
  },
  searchInputStyle: {
    boxShadow: 'none',
    border: '1px solid',
    float: 'left',
    outline: 'none',
    borderRadius: '0',
    color: '#ffffff',
    width:'100%',
    marginTop: '15px',
    padding: '35x',
    backgroundColor: 'transparent'
  },
  submitContainerStyle: {
    // backgroundColor: 'transparent',
      left: '50%',
      marginLeft: '-3.5vmin'
  }
};

const mapStateToProps = (state, ownProps) => {
    const {chef, id} = ownProps.match.params;

    return {
        chefId: chef,
        menuId: id,
        chef: state.chef,
        menu: state.menu,
        checkout: state.checkout
    };
};

export default connect(mapStateToProps, {displaySelectedChef, getMenu, nameInput, emailInput, submit})(Checkout);
