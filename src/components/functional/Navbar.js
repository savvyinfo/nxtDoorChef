import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return (

      <nav className="navbar navbar-fixed-top" style={styles.navStyle}>
      <div className="row">


          <div className="col">
              <Link to="/">
                <img src="../img/nxtDoorChef-revised.png" style={styles.logoSymbol} />
              </Link>
          </div>
          <div className="col">
              <Link to="/">
                  <span className="nav_home_container burgundy-bg">
                    <img src="../img/section_title_home.png" className="nav_home" />
                  </span>
              </Link>
              <Link to="/results/foods">
                    <span className="nav_cooking_container green-bg">
                      <img src="../img/section_title_cooking.png" className="nav_cooking" />
                    </span>
              </Link>
              <Link to="/results/chefs">
                      <span className="nav_chef_container orange-bg">
                        <img src="../img/section_title_chefs.png" className="nav_chef" />
                      </span>
              </Link>
          </div>

      </div>
      </nav>
  );
};

const styles = {
  navStyle: {
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      // position: 'fixed',
      // width: '100%',
      zIndex: '1000',
      backgroundColor: '#FFF',
      borderRadius: '0',
      padding: '2vmin'
  },
  logoSymbol: {
    float: 'left',
    width: '30vmin',
    minWidth: '150px',
    marginTop: '2vmin',
    marginBottom: '1vmin'
  }
};

