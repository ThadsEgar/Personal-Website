import React from 'react';
import ReactDOM from 'react-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

class ContentAbout extends React.Component{
  render(){
    return(
      <div className="Content">
        <h1 classname="Name">About</h1>
        <p>I am a Junior attending the University of Texas at Dallas, working towards a Bachelors Degree in Computer Science.</p>
        <p>I have created this website to serve as an online biography to record my path through software development.</p>
        <p>This website will serve as a place to put all of my future projects, job experience, and other miscellaneous things.</p>
        <p>This website will also undergo several iterations as I further continue to familiarize myself with the capabilities of react.js.</p>
        <p>Since this website is currently under construction (for now) feel free to visit my LinkedIn account to see what technical skills I currently possess.</p>
      </div>


    )
  };
}

export default ContentAbout;
