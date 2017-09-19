import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return (
    <nav className="navbar" style={styles.navStyle}>
      <Link to="/">
        <h1 className="navbar-brand" style={styles.navLink}>NxtDoorChef</h1>
      </Link>
    </nav>
  );
};

const styles = {
  navStyle: {
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    backgroundColor: '#FFA500'
  },
  navLink: {
    color: 'black'
  }
};