import React from 'react';

export default (props) => {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="card" style={styles.containerStyle}>
        <div className="card-block" style={styles.headerStyle}>
          <h4>{props.title}</h4>
        </div>
        <div className="card-block">
          <button className="btn btn-outline-warning" onClick={props.onClick}>
            {props.action}
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  containerStyle: {
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    marginTop: '15px',
      borderRadius: '0'
  },
  headerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '150px'
  }
};