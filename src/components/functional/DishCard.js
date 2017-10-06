import React from 'react';

export default (props) => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
      <div className="card" style={styles.cardStyle}>
        <img className="card-img" src={props.photo} alt="picture of food" style={styles.cardImageStyle}/>
        <div className="card-img-overlay">
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src="../img/section_title_cooking.png" className="margin_bottom_10" />
            </div>
            <div>
                <h5 className="kitchenTitle text-center">{props.name}</h5>
            </div>
            <div
            onClick={props.onClick}
            className="see_other_btn_container"
            style={{left: '50%', marginLeft: '-3.5vmin'}}
            >
            <span className="button_title">ORDER</span>
            </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  cardStyle: {
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    marginTop: '15px',
    border: '15px solid #99cccc',
    height: '250px',
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: '0'
  },
    cardImageStyle: {
        borderRadius: '0',
        objectFit: 'cover',
        overflow: 'hidden',
        width: 'auto',
        height: '100%'
    },
};