import React from 'react';
import ReactDOM from 'react-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import './Header.css';

class MyHeader extends React.Component {
  render() {
    return (
      <div style={{height: '100px', position: 'relative'}}>
              <Header transparent className="Header" title="CS" style={{color: 'white'}}>
                  <Navigation className="Navigation-names">
                  <Link to="/">Home</Link>
                  <Link to="/ContentAbout">About</Link>
                  <Link to="/ContentContact">Contact</Link>
                  </Navigation>
              </Header>
      </div>
    )
  };
}

export default MyHeader;
