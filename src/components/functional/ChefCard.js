import React from 'react';

export default (props) => {
  return (

  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
    <div className="card" style={styles.containerStyle}>
        <div style={styles.contentStyle}>
            <div style={styles.contentTopStyle}>
                <img src="../img/section_title_chefs.png" className="margin_bottom_10" />
                <div className="kitchenTitle">{props.restaurant}</div>
                <div className="mainText">by</div>
                <div className="nameTitle">{props.chef}</div>
            </div>

            <div className="see_other_btn_container" onClick={props.onClick}>
                <span className="button_title">SEE</span>
            </div>
        </div>
    </div>
  </div>

  );
};

const styles = {
    containerStyle: {
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        marginTop: '15px',
        padding: '15px',
        border: '15px solid #edba1f',
        // backgroundColor: '#edba1f',
        backgroundColor: '#ed9421',
        borderRadius: '0'
    },

    contentStyle: {
        display: 'flex',
        justifyContent: 'center',
        minHeight: '200px',
        width: '100%',
        height: '100%'
    },

    contentTopStyle: {
        display: 'inline-block',
        textAlign: 'center'
    }
};