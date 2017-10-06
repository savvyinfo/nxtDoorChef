import React from 'react';

export default (props) => {
  return (

        <div className="card" style={styles.containerStyle}>
          <div style={styles.headerStyle}>
            <span className="sectionTitle">{props.title}</span>
          </div>
          <div style={styles.headerStyle}>
            <div className="see_btn_container" onClick={props.onClick}>
              <span className="button_title">{props.action}</span>
            </div>
          </div>
        </div>
  );
};

const styles = {
  containerStyle: {
    position: 'absolute',
    padding: '0',
    margin: '0',
    width: '100%',
    height: '100%',
    border: '0',
    backgroundColor: 'transparent',
    borderRadius: '0'
  },
  headerStyle: {
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center'
  }
};