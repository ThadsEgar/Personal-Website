import React from 'react';
import REACTDOM from 'react-dom';
import './Footer.css';

class MyFooter extends React.Component{
  render(){
    return(
      <footer className="footer-container">
        <div className="footer-container2">
          <p>©Copyright 2018 Thads Michael Egar.</p>
          <p>All rights reserved. Powered by react.js</p>
          </div>
      </footer>
    )
  };
}

export default MyFooter;
