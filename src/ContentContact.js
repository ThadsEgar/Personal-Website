import React from 'react';
import ReactDOM from 'react-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

class ContentContact extends React.Component{
  render(){
    return(
      <div className="Content">
        <h1 classname>Contact</h1>
        <p classname="d1">LinkedIn: https://www.linkedin.com/in/thads-michael-egar/</p>
        <p classname="d1">Email: tmichaelegar@gmail.com</p>
      </div>


    )
  };
}

export default ContentContact;
