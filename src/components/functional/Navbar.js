import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return (
    <nav className="navbar" style={styles.navStyle}>
      {/*<Link to="/">*/}
        {/*<h1 className="navbar-brand" style={styles.navLink}>NxtDoorChef</h1>*/}
      {/*</Link>*/}
      <Link to="/">
        <img src={"img/nxtDoorChef-revised.png"} />
      </Link>
    </nav>
  );
};

const styles = {
  navStyle: {
    // boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    boxShadow: '0',
    // backgroundColor: '#FFA500',
    borderRadius: '0'
  },
  logoSymbol: {
    width: '30vmin',
    marginTop: '2vmin',
    marginBottom: '1vmin'
  },
  navLink: {
    color: 'black'
  }
};