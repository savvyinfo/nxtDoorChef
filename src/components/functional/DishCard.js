import React from 'react';

export default (props) => {
  return (
    <div className="col-12 col-sm-6 col-md-3">
      <div className="card" style={styles.cardStyle}>
        <img className="card-img" src={props.photo} alt="picture of food" style={{height: '200px'}}/>
        <div className="card-block">
          <h5>{props.name}</h5>
          <button
            onClick={props.onClick}
            className="btn btn-outline-warning"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  cardStyle: {
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    marginTop: '15px',
    borderRadius: '0'
  }
};