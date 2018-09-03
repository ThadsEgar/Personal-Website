import React from 'react';
import ReactDOM from 'react-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import './Header.css';

class MyHeader extends React.Component {
  render() {
    return (
      <div style={{height: '100px', position: 'relative'}}>
              <Header transparent className="Header" title="UTD CS 2020" style={{color: 'white'}}>
                  <Navigation className="Navigation-names">
                      <a href="#">Home</a>
                      <a href="#">About</a>
                      <a href="https://www.linkedin.com/in/thads-michael-egar/">LinkedIn</a>
                      <a href="#">Contact</a>
                  </Navigation>
              </Header>
      </div>
    )
  };
}

export default MyHeader;
