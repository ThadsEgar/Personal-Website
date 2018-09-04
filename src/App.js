import React, { Component } from 'react';
import './App.css';

//components
import Youtube from './Youtube';
import MyHeader from './Header';
import MyFooter from './Footer';

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
    <h1>THADS MICHAEL EGAR</h1>
    <p>Website currently under construction</p>
  </div>
  <MyFooter />
</div>


</div>
    );
  }
}

export default App;
