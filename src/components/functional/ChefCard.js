import React from 'react';

export default (props) => {
  return (
    <div className="col-12 col-sm-6 col-md-3">
      <div className="card" style={styles.containerStyle}>
        <div className="card-block" style={styles.contentStyle}>
          <h4>{props.restaurant}</h4>
          <h6>By</h6>
          <h5>{props.chef}</h5>
        </div>
        <div className="card-block">
          <button
            onClick={props.onClick}
            className="btn btn-outline-warning"
          >
            Menu
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
  contentStyle: {
    height: '150px'
  }
};