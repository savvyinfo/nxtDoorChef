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
          <div className="col-xs-12 col-md-12 col-lg-6">
          <div className="card" style={styles.buyContainerStyle}>
            <h4 className="text-center subTitle"><img src="../img/section_title_checkout.png" style={{marginBottom: '10px'}} /><br />CUSTOMER INFO</h4>
            <form>
              <div className="form-group">
                <input type="text" className="form-control burgundyLight-bg inputwords" style={styles.searchInputStyle} placeholder="Enter Name"/>
                <input type="text" className="form-control burgundyLight-bg inputwords" style={styles.searchInputStyle} placeholder="Enter Email"/>
              </div>
              <button className="submit_btn_container" type="submit" style={styles.submitContainerStyle}>
                <span className="button_title">SUBMIT</span>
              </button>
            </form>
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
                    <span className="buy_button_title">BUY</span>
                  </div>
              </div>
            </div>
          </div>


          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
            <div className="card" style={styles.containerStyle}>
              <h4 className="text-center subTitle"><img src="../img/section_title_cooking.png" style={{marginBottom: '10px'}} /><br />DESCRIPTION</h4>
              <h6 className="text-center subSubTitle">COOKIN' TITLE:</h6>
              <h6 className="text-center nameTitle">{food ? food.item_name : ''}</h6>
              <div style={{width: '100%', height: '1px', backgroundColor: '#fff', marginTop: '10px', marginBottom: '15px'}}> </div>
              <h6 className="text-center subSubTitle">COOKIN' DESCRIPTION:</h6>
              <h6 className="mainText text-center">{food ? food.description : ''}</h6>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
            <div className="card" style={styles.containerStyle}>
              <h4 className="text-center subTitle"><img src="../img/section_title_cooking.png" style={{marginBottom: '10px'}} /><br />PICKUP INFO</h4>
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
            {this.itemOrdered()}

          {/*<div className="col-xs-12 col-md-12 col-lg-6">*/}
            {/*<div className="card map_back_01" style={styles.containerStyle}>*/}
              {/*<h3>Map placeholder</h3>*/}
              {/*<h5>(Chef location from order location will be placed.)</h5>*/}
            {/*</div>*/}
          {/*</div>*/}
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
    // display: 'block',
    //   position: 'relative',
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
    backgroundColor: 'transparent',
      left: '50%',
      marginLeft: '-3.5vmin'
    // display: 'block'
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