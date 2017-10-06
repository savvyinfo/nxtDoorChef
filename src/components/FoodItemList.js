import React from 'react';
import {connect} from 'react-redux';
import Card from './functional/DishCard';
import {getFoodItems} from '../actions';
import Navbar from './functional/Navbar';

class FoodItemList extends React.Component {

  componentWillMount () {
    this.props.getFoodItems();
  }

  renderFoods () {
    return this.props.foods.map((food) => {
      return (
        <Card
          photo={food.photo}
          name={food.item_name}
          onClick={() => this.props.history.push(`/chef-id/${food.chef_id}/food-id/${food.menu_item_number}`)}
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
                <span className="mainText text-center white-font"><span className="headTitle">COOKIN' NEARBY</span><br />Simply choose the type of food you'd like to eat, and enjoy it!</span>
              </div>

              <img src="../img/section_title_cooking_all_shadow.png" style={styles.chefIconStyle} />

            </div>
          </div>

          {/*<div className="col-xs-12 col-md-12 col-lg-6" style={styles.headerStyle}>*/}
            {/*/!*<div className="card-block" >*!/*/}
              {/*<img src="../../../img/section_title_cooking.png"/>*/}
              {/*<form>*/}
                {/*<div className="form-group">*/}
                    {/*/!*<h4 className="sectionTitle">SEARCH BY CUISINE</h4>*!/*/}
                  {/*<input*/}
                      {/*value={this.props.search}*/}
                      {/*onChange={(event) => this.props.searchInput(event.target.value)}*/}
                      {/*type="text"*/}
                      {/*className="form-control greenLight-bg inputWords"*/}
                      {/*style={styles.searchInputStyle}*/}
                      {/*placeholder="Search by Cuisine"*/}
                  {/*/>*/}
                {/*</div>*/}
              {/*</form>*/}
            {/*/!*</div>*!/*/}
            {/*/!*<div className="card-block green-bg">*!/*/}
              {/*<div*/}
                  {/*onClick={() => this.props.history.push(`/search/${this.props.search}`)}*/}
                  {/*className="see_btn_container"*/}
              {/*>*/}
                {/*<span className="button_title">SEARCH</span>*/}
              {/*</div>*/}
            {/*/!*</div>*!/*/}
          {/*</div>*/}

        </div>

        <div className="row">
          {this.renderFoods()}
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
        backgroundColor: '#009999',
        width: '40vmin',
        height: '40vmin'
    },
    titleContainerSmallStyle: {
        position: 'absolute',
        top: '-10vmin',
        left: '35vmin',
        borderRadius: '50%',
        backgroundColor: '#99cccc',
        width: '30vmin',
        height: '30vmin'
    },

    headerTransparentStyle: {
        boxShadow: '0 10px 20px rgba(0,0,0,0), 0 6px 6px rgba(0,0,0,0)',
        background: 'transparent',
        height: '200px',
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
        border: '15px solid #99cccc',
        backgroundColor: '#009999',
        borderRadius: '0'
    },
    searchInputStyle: {
        boxShadow: 'none',
        border: '1px solid',
        float: 'left',
        outline: 'none',
        borderRadius: '0',
        color: '#ffffff',
        // width:'100%',
        // height: '100%',
        top: '50%',
        marginTop: '6vmin',
        padding: '10px',
        backgroundColor: 'transparent'
    },
    cookingBottomStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '0',
        backgroundColor: '#009999'
    }
};


const mapStateToProps = ({foods}) => {
  return {foods};
};

export default connect(mapStateToProps, {getFoodItems})(FoodItemList);