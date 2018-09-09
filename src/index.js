import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import YouTube from 'react-youtube';
import {BrowserRouter} from 'react-router-dom';

//components
import App from './App';


import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
