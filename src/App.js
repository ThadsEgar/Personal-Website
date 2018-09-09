import React, { Component } from 'react';
import './App.css';

//components
import Youtube from './Youtube';
import MyHeader from './Header';
import MyFooter from './Footer';
import ContentLanding from './ContentLanding';
import ContentAbout from './ContentAbout';
import ContentContact from './ContentContact';
import Router from './Router';
//other
import YouTube from 'react-youtube';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
class App extends Component {

  render() {
    return (
//Header
<div id="parent">
<div>
  <MyHeader />
  <Youtube />
  <div className="content">
    <Router />
  </div>
  <MyFooter />
</div>


</div>
    );
  }
}

export default App;
